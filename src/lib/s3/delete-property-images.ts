"use server";
import { DeletedObject, DeleteObjectsCommand } from "@aws-sdk/client-s3";
import { PropertyImage } from "../enums/property-image";
import { S3_PROPERTY_BUCKET, s3client } from "./s3-client";

export const deletePropertyImages = async (
  propertyImages: PropertyImage[],
): Promise<DeletedObject[] | undefined> => {
  try {
    const deleteKeys = propertyImages.map((img) => {
      const key = img.path.replace(`/${S3_PROPERTY_BUCKET}/`, "");
      return { Key: key };
    });

    const command = new DeleteObjectsCommand({
      Bucket: S3_PROPERTY_BUCKET,
      Delete: { Objects: deleteKeys },
    });

    const { Deleted } = await s3client.send(command);

    return Deleted;
  } catch (error) {
    console.error("Error deleting property images:", error);
    return [];
  }
};
