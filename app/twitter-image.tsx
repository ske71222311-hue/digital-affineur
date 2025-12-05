import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "AI.Ripening - ИИ-технолог для созревания сыра";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A2463 0%, #1E3A5F 50%, #2C3E50 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `radial-gradient(circle at 25% 25%, #FF8C42 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #FF8C42 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <span style={{ fontSize: "72px", marginRight: "16px" }}>🧀</span>
            <span
              style={{
                fontSize: "56px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              AI
              <span style={{ color: "#FF8C42" }}>.</span>
              Ripening
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "bold",
              color: "white",
              margin: "0 0 24px 0",
              lineHeight: 1.2,
              maxWidth: "900px",
            }}
          >
            Первый в России ИИ-технолог для созревания сыра
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "28px",
              color: "rgba(255, 255, 255, 0.8)",
              margin: "0 0 40px 0",
            }}
          >
            Снижаем брак с 30% до 5%. Окупаемость 3-6 месяцев.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "48px",
            }}
          >
            {[
              { value: "95%", label: "Точность" },
              { value: "25%", label: "Рост выхода" },
              { value: "80%", label: "Экономия времени" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px 32px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <span
                  style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    color: "#FF8C42",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "8px",
            background: "linear-gradient(90deg, #FF8C42, #FFB347, #FF8C42)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}


