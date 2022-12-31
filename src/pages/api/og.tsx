import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title')
    const author = searchParams.get('author')

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgb(250 250 250)',
          }}
        >
          <p
            style={{
              color: 'rgb(39 39 42)',
              fontSize: '64px',
              fontWeight: 'bold',
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: '32px',
              color: 'rgb(82 82 91)',
            }}
          >
            Author: {author}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
