import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(120deg, #fdf1e0 0%, #fbe4ec 45%, #eee0fb 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#211a14",
            borderRadius: 24,
            padding: "24px 40px",
            marginBottom: 36,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: 60,
                height: 34,
                background: "#fbf5ec",
                borderRadius: "34px 34px 5px 5px",
              }}
            />
            <div
              style={{
                width: 18,
                height: 24,
                background: "#fbf5ec",
                borderRadius: 5,
                marginTop: -2,
              }}
            />
          </div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#211a14",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Clear, calm focus.
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#211a14",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Without the crash.
        </div>
        <div style={{ fontSize: 28, color: "#7a1ff0", marginTop: 24, fontWeight: 600 }}>
          THE MUSHOFFEE
        </div>
      </div>
    ),
    { ...size }
  );
}
