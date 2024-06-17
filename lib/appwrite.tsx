import { IUser } from "@/models/user";
import { IPayslip } from "@/types/models";
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.gm-bi.smartpayslip",
  projectId: "665b3f5200132bb6dcf0",
  databaseId: "665b414100218cd24716",
  userCollectionId: "665b415c00315f0d9701",
  payslipCollectionId: "665b41a1003d7dc0c059",
  storageId: "665b42980025bfaff424",
};

export class AppwriteError extends Error {
  constructor(public message: string, public code?: number) {
    super(message);
    this.name = "AppwriteError";
  }
}

const {
  endpoint,
  platform,
  projectId,
  databaseId,
  userCollectionId,
  payslipCollectionId,
  storageId,
} = config;

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(endpoint) // Your Appwrite Endpoint
  .setProject(projectId) // Your project ID
  .setPlatform(platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
export const createUser = async ({
  username,
  email,
  password,
  avatar,
}: IUser) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;

    const avatartUrl = avatars.getInitials(username);

    await signIn({ email, password });

    const newUser = await databases.createDocument(
      databaseId,
      userCollectionId,
      ID.unique(),
      { accountId: newAccount.$id, email, username, avatar: avatartUrl }
    );

    return newUser;
  } catch (error: any) {
    if (error.code && error.message) {
      console.error(`Error ${error.code}: ${error.message}`);
      throw new AppwriteError(error.message, error.code);
    } else {
      console.error("An unexpected error occurred", error);
      throw new AppwriteError("An unexpected error occurred");
    }
  }
};

export const signIn = async ({ email, password }: IUser) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error: any) {
    if (error.code && error.message) {
      console.error(`Error ${error.code}: ${error.message}`);
      throw new AppwriteError(error.message, error.code);
    } else {
      console.error("An unexpected error occurred", error);
      throw new AppwriteError("An unexpected error occurred");
    }
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      databaseId,
      userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error: any) {
    if (error.code && error.message) {
      console.error(`Error ${error.code}: ${error.message}`);
      throw new AppwriteError(error.message, error.code);
    } else {
      console.error("An unexpected error occurred", error);
      throw new AppwriteError("An unexpected error occurred");
    }
  }
};

export const getAllPayslips = async (): Promise<IPayslip[]> => {
  try {
    const posts = await databases.listDocuments(
      databaseId,
      payslipCollectionId
    );

    return posts.documents as IPayslip[];
  } catch (error: any) {
    if (error.code && error.message) {
      console.error(`Error ${error.code}: ${error.message}`);
      throw new AppwriteError(error.message, error.code);
    } else {
      console.error("An unexpected error occurred", error);
      throw new AppwriteError("An unexpected error occurred");
    }
  }
};
