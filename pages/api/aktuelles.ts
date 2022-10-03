import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDb from '../../libs/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDb();

  await db.collection('aktuelles').insertOne({
    content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the',
    date: new Date(),
    public: true,
    title: 'Test 2',
  });

  await res.revalidate('/aktuelles');
  res.json({ revalidated: true });
}
