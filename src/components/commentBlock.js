import React from 'react';
import './styles/comment.css';
import faker from 'faker';
import CommentDetail from './commentDetail';
import ApprovalCard from './ApprovalCard';

const commentBlock = () => {
	return (
		<div className='ui comments'>

			<ApprovalCard>
				<CommentDetail
					pic={faker.image.avatar()}
					name={faker.name.findName()}
					time={' 2015-01-01xxxx'}
					txt={faker.lorem.words()}
				/>
			</ApprovalCard>

      <ApprovalCard>
				<CommentDetail
					pic={faker.image.avatar()}
					name={faker.name.findName()}
					time={' 2015-01-01xxxx'}
					txt={faker.lorem.words()}
				/>
			</ApprovalCard>

      <ApprovalCard>
				<CommentDetail
					pic={faker.image.avatar()}
					name={faker.name.findName()}
					time={' 2015-01-01xxxx'}
					txt={faker.lorem.words()}
				/>
			</ApprovalCard>
		</div>
	);
};

export default commentBlock;
