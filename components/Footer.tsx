import { footerList1, footerList2, footerList3 } from '../utils/constants';

const List = ({ items, marginTop }: { items: string[]; marginTop: boolean }) => {
	return (
		<div className={`flex flex-wrap gap-2 ${marginTop && 'mt-5'}`}>
			{items.map(item => (
				<p key={item} className='text-gray-400 text-sm hover:underline cursor-pointer'>
					{item}
				</p>
			))}
		</div>
	);
};

export const Footer = () => {
	return (
		<div className='mt-6 hidden xl:block'>
			<List items={footerList1} marginTop={false} />
			<List items={footerList2} marginTop />
			<List items={footerList3} marginTop />
			<p className='text-gray-400 text-sm mt-5'>Jake Lambert Social Media App 2022</p>
		</div>
	);
};
