import { images } from "../constants";

type Img = {
	name: string;
	src: string;
};
export const getImages = async (): Promise<Img[]> => {
	return images as Img[];
};
