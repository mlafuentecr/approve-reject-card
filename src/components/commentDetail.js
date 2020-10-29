import React from 'react';

const CommentDetail = (props) => {
	return (
		<div className='comment__detail'>
			<a href='/' className='comment__pic'>
				<img src={props.pic} alt='' />
			</a>
			<div className='comment__cotent'>
				<div className='comment__name'>{props.name}</div>
				<div className='comment__time'>{props.time}</div>
				<div className='comment__txt'>{props.txt}</div>
			</div>

		</div>
	);
};

export default CommentDetail;
