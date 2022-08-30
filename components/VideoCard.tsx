import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';

import { Video } from '../types';

interface IProps {
	post: Video;
}

const VideoCard = ({ post }: IProps) => {
	const [isHover, setIsHover] = useState(false);
	const [playing, setPlaying] = useState(false);
	const [isVideoMuted, setIsVideoMuted] = useState(false);

	const videoIconStyles = `text-black text-2xl lg:text-4xl`;

	return (
		<div className='border-gray-200 flex flex-col border-b-2 pb-6'>
			<div>
				<div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
					<div className='md:w-16 md:h-16 w-10 h-10'>
						<Link href='/'>
							<>
								<Image
									width={62}
									height={62}
									className='rounded-full'
									src={post.postedBy.image}
									alt='Profile photo'
									layout='responsive'
								/>
							</>
						</Link>
					</div>
					<div>
						<Link href='/'>
							<div className='flex items-center gap-2'>
								<p className='flex gap-2 items-center md:text-md font-bold text-primary'>
									{post.postedBy.userName}
									<GoVerified className='text-blue-400 text-md' />
								</p>
								<p className='capitalize font-medium text-xs text-gray-500 hidden md:block'>
									{post.postedBy.userName}
								</p>
							</div>
						</Link>
					</div>
				</div>
			</div>

			<div className='lg:ml-20 flex gap-4 relative'>
				<div
					className='rounded-3xl'
					onMouseEnter={() => setIsHover(true)}
					// onMouseLeave={() => setIsHover(false)}
				>
					<Link href='/'>
						<video
							loop
							className='lg:w-[600px] h-[300px] md:h-[400px] lg:h[530px] w-[200px] rounded-2xl cursor-pointer bg-gray-100'
							src={post.video.asset.url}
						></video>
					</Link>

					{isHover && (
						<div>
							{playing ? (
								<button>
									<BsFillPauseFill className={videoIconStyles} />
								</button>
							) : (
								<button>
									<BsFillPlayFill className={videoIconStyles} />
								</button>
							)}
							{isVideoMuted ? (
								<button>
									<HiVolumeOff className={videoIconStyles} />
								</button>
							) : (
								<button>
									<HiVolumeUp className={videoIconStyles} />
								</button>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default VideoCard;