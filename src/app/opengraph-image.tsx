import { ImageResponse } from 'next/og';

export const alt = 'Mobot — Real Robots. Real Devices. Real Defects.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Default social card. Route segments can override with their own opengraph-image. */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a2540',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* accent wash */}
        <div
          style={{
            position: 'absolute',
            top: -180,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: 620,
            background: 'linear-gradient(120deg, #6d3fe0 0%, #1d4ed8 100%)',
            opacity: 0.45,
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              width: 20,
              height: 20,
              borderRadius: 20,
              background: '#86b6ef',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              fontWeight: 700,
              color: '#86b6ef',
              letterSpacing: '0.18em',
            }}
          >
            MOBOT
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 82,
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Real Robots. Real Devices.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 82,
              fontWeight: 700,
              color: '#86b6ef',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Real Defects.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.4,
            maxWidth: 900,
          }}
        >
          Robotic mobile testing on 300+ real iOS and Android devices, with every failure verified by a QA analyst.
        </div>
      </div>
    ),
    size,
  );
}
