import { Padding, Col,Spacer, Row } from '@barelyreaper/rlayouts';
import { shortFormatDate } from 'lib/format-date';
import Link from 'next/link';

export default function PostCard({ title, date, slug }) {
  return (
    <>
      <Padding y={2} x={15}>
        <Col>
          <Link href={`blog/${slug}`}>
            <a>{title}</a>
          </Link>
          <Spacer y={1}></Spacer>
          <p>{shortFormatDate(date)}</p>
        </Col>
      </Padding>
      <style jsx>{`
        a {
          font-size: 20px;
          font-weight: bold;
        }

        p{
            font-size:14px;
            color:var(--secondary-text);
        }
      `}</style>
    </>
  );
}
