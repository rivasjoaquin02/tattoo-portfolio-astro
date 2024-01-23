import { IMAGES, type Images } from "../constants";

export const getImages = async (): Promise<Images> => {
	return IMAGES as Images;
};
