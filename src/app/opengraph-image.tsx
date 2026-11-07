import { ImageResponse } from "next/og";

export const alt = "Thivanka Tharuka, Computer Science undergraduate and full-stack developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0F19",
          color: "#F9FAFB",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#F9FAFB",
              color: "#0B0F19",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            TT
          </div>
          <div style={{ fontSize: 24, color: "#9CA3AF" }}>Thivanka Tharuka</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 650, letterSpacing: -1.5, lineHeight: 1.05 }}>
            Building Intelligent Solutions Through Code.
          </div>
          <div style={{ fontSize: 28, color: "#9CA3AF" }}>
            Computer Science undergraduate · Full-stack developer
          </div>
        </div>
      </div>
    ),
    size,
  );
}
