/**
 *
 * @param { import('next').NextApiRequest } request
 * @param { import('next').NextApiResponse } response
 */
export default function handler(request, response) {
  response.status(200).json({
    time: 1640744134067,
    blocks: [
      {
        id: 'xsFnMLf1Kz',
        type: 'header',
        data: {
          text: 'Hello, world!',
          level: 2,
        },
      },
      {
        id: 'PpNgIToBa6',
        type: 'paragraph',
        data: {
          text: "This is your rich text editor. Cool, isn't it?",
        },
      },
    ],
    version: '2.22.2',
  })
}
