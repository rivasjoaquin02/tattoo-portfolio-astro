import { type Images } from "../constants";
import { useState } from "preact/hooks";

type Props = {
	data: Images;
};

export function Gallery({ data }: Props) {
	const [selectedImg, setSelectedImg] = useState<number>(0);
	const [modal, setModal] = useState<boolean>(false);

	const handleClick = (id: number) => {
		setModal((modal) => !modal);
		setSelectedImg(id);
	};

	return (
		<div class="relative flex flex-col">
			{modal && (
				<div
					class="absolute z-20 inset-0 
                    flex flex-col gap-4 backdrop-blur-sm p-10"
				>
					<img
						src={data[selectedImg].src.src}
						alt={data[selectedImg].name}
						class="rounded-xl"
					/>
					<button
						type="button"
						class="flex gap-2 text-lumna-600 font-bold px-4 py-2 rounded-xl
							bg-black/80
							hover:scale-105 hover:shadow-lumna-500 transition-all mx-auto"
						onClick={() => setModal(false)}
					>
						close
					</button>
				</div>
			)}
			<ul role="list" class="columns-2 md:columns-3 rounded-xl overflow-hidden">
				{data.map((item, id) => (
					<img
						key={id}
						class="opacity-80 hover:opacity-100 reveal w-full cursor-pointer mb-2
							transition-opacity"
						src={item.src.src}
						alt={item.name}
						onClick={() => handleClick(id)}
					/>
				))}
			</ul>
			<div class="mx-auto my-10">
				<button
					class="flex gap-2 text-lumna-600 font-bold px-4 py-2 rounded-xl
						hover:scale-105 hover:shadow-lumna-500 transition-all"
				>
					Show More
				</button>
			</div>
		</div>
	);
}
