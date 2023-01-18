import PostList from '../components/Blogs/PostList';
import Heading from '../components/Heading';
import DynamicModal from '../../src/components/utils/DynamicModal';
import PostCreate from '../../src/components/Blogs/PostCreate';
import { useState } from 'react';

export default function Articles() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Blog posts" handleShow={handleShow} />
        <PostList />
      </div>
      <DynamicModal show={show} handleClose={handleClose} title="Create post" content={<PostCreate />} />
    </>
  );
}
