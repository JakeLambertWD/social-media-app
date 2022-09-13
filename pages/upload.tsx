import { useEffect, useState } from 'react';
import useRouter from 'next/router';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { SanityAssetDocument } from '@sanity/client';

import useAuthStore from '../store/authStore';
import { client } from '../utils/client';

const Upload = () => {
	const [isLoading, setIsLoading] = useState(false);
	// we must declare the type here from Sanity
	const [videoAsset, setVideoAsset] = useState<SanityAssetDocument | undefined>();
	const [wrongFileType, setWrongFileType] = useState(false);

	const uploadVideo = async (e: any) => {
		const selectedFile = e.target.files[0];

		const fileTypes = ['video/mp4', 'video/webm', 'video/ogg'];

		// check user has uploaded the correct file type
		if (fileTypes.includes(selectedFile.type)) {
			// upload a file to Sanity
			client.assets
				.upload('file', selectedFile, {
					contentType: selectedFile.type,
					filename: selectedFile.name
				})
				.then(data => {
					setVideoAsset(data);
					setIsLoading(false);
				});
		} else {
			setIsLoading(false);
			setWrongFileType(true);
		}
	};

	return (
		<div className='flex w-full h-full'>
			<div className='bg-white rounded-lg'>
				<div>
					<div>
						<p className='text-2xl font-bold'>Upload Video</p>
						<p className='text-md text-gray-400 mt-1'>Post a video to your account</p>
					</div>
					<div className='border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center outline-none mt-10 w-[260px] h-[460px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100'>
						{isLoading ? (
							<p>Uploading... </p>
						) : (
							<div>
								{videoAsset ? (
									<div>
										<video
											src={videoAsset?.url}
											loop
											controls
											className='rounded-xl h-[450px] mt-16 bg-black'
										></video>
									</div>
								) : (
									<label className='cursor-pointer'>
										<div className='flex flex-col items-center justify-center h-full'>
											<div className='flex flex-col items-center justify-center'>
												<p>
													<FaCloudUploadAlt className='text-gray-300 text-6xl' />
												</p>
												<p className='text-sm font-semibold text-gray-900'>
													Upload Video
												</p>
											</div>
											<p className='bg-[#F51997] text-center mt-10 rounded text-white font-medium p-2 w-52 outline-none text-base'>
												Select File
											</p>
										</div>
										<input
											type='file'
											name='upload-video'
											onChange={uploadVideo}
											className='w-0 h-0'
										/>
									</label>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Upload;
