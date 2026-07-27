import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#211a14",
          borderRadius: 14,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: 34,
              height: 20,
              background: "#fbf5ec",
              borderRadius: "20px 20px 3px 3px",
            }}
          />
          <div
            style={{
              width: 10,
              height: 14,
              background: "#fbf5ec",
              borderRadius: 3,
              marginTop: -1,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
