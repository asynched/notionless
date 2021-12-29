/**
 *
 * @param { import('next').NextApiRequest } request
 * @param { import('next').NextApiResponse } response
 */
export default function handler(request, response) {
  return response.status(200).json(['test.rch', 'async.rch', 'closures.rch'])
}
