export default function ArchitectureFallback() {
  return (
    <svg viewBox="0 0 600 600" fill="none" className="architecture-svg">
      <defs>
        <linearGradient id="kinetic-copper-top" x1="-58" y1="-38" x2="58" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffb16f" />
          <stop offset=".45" stopColor="#f57539" />
          <stop offset="1" stopColor="#cf471f" />
        </linearGradient>
        <linearGradient id="kinetic-copper-left" x1="-58" y1="-7" x2="0" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e9682f" />
          <stop offset=".6" stopColor="#c5421b" />
          <stop offset="1" stopColor="#913519" />
        </linearGradient>
        <linearGradient id="kinetic-copper-right" x1="0" y1="24" x2="58" y2="57" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8b2d13" />
          <stop offset=".48" stopColor="#ba461d" />
          <stop offset="1" stopColor="#df632b" />
        </linearGradient>
        <radialGradient id="kinetic-core" cx=".31" cy=".24" r=".87">
          <stop stopColor="#fffdf2" />
          <stop offset=".22" stopColor="#d3d1c2" />
          <stop offset=".39" stopColor="#84897d" />
          <stop offset=".5" stopColor="#252b26" />
          <stop offset=".6" stopColor="#646d5c" />
          <stop offset=".72" stopColor="#d9d8c9" />
          <stop offset=".85" stopColor="#94998a" />
          <stop offset="1" stopColor="#343c33" />
        </radialGradient>
        <linearGradient id="kinetic-chrome" x1="147" y1="219" x2="445" y2="370" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3d493c" />
          <stop offset=".2" stopColor="#c5c8b8" />
          <stop offset=".39" stopColor="#fdfbf0" />
          <stop offset=".5" stopColor="#5b6456" />
          <stop offset=".66" stopColor="#a7ad99" />
          <stop offset=".84" stopColor="#f4f1e2" />
          <stop offset="1" stopColor="#525b4a" />
        </linearGradient>
        <radialGradient id="kinetic-shadow">
          <stop stopColor="#3b4531" stopOpacity=".16" />
          <stop offset="1" stopColor="#3b4531" stopOpacity="0" />
        </radialGradient>
        <clipPath id="kinetic-sphere-clip">
          <circle cx="300" cy="296" r="83" />
        </clipPath>
        <g id="kinetic-shell-segment" strokeLinejoin="round">
          <path d="M-58-7 0 24V88L-58 57Z" fill="url(#kinetic-copper-left)" />
          <path d="m0 24 58-31v64L0 88Z" fill="url(#kinetic-copper-right)" />
          <path d="m0-38 58 31L0 24-58-7Z" fill="url(#kinetic-copper-top)" />
          <path d="m-58-7 58 31 58-31M0 24V88" stroke="#ffbb83" strokeWidth="1.1" />
          <path d="m-46-7 46-24L46-7 0 17Z" stroke="#b9431c" strokeOpacity=".7" />
          <path d="m-51 8 43 23v45M8 31l43-23v44" stroke="#772a15" strokeOpacity=".35" />
          <path d="m-51 14 43 23M8 37l43-23" stroke="#ffaf73" strokeOpacity=".36" />
          <path d="m-34 5 23 12m22 0L34 5" stroke="#ffcf9d" strokeWidth="2" />
        </g>
      </defs>

      <ellipse cx="300" cy="529" rx="206" ry="33" fill="url(#kinetic-shadow)" />
      <g stroke="#8c9481" strokeWidth=".75" opacity=".45">
        <circle cx="300" cy="296" r="225" strokeDasharray="1 9" />
        <path d="M300 55v16m0 450v16M59 296h16m450 0h16M125 121l11 11m328 328 11 11M125 471l11-11m328-328 11-11" />
        <path d="m150 202 150-82 150 82v172l-150 82-150-82Z" strokeDasharray="3 7" opacity=".65" />
        <path d="m150 202 150 82 150-82M300 284v172" strokeDasharray="3 7" opacity=".65" />
      </g>

      <use href="#kinetic-shell-segment" transform="translate(300 117) scale(.87)" />
      <use href="#kinetic-shell-segment" transform="translate(148 199) scale(.87)" />
      <use href="#kinetic-shell-segment" transform="translate(452 199) scale(.87)" />

      <g stroke="url(#kinetic-chrome)" strokeWidth="7">
        <ellipse cx="300" cy="296" rx="154" ry="62" transform="rotate(-34 300 296)" />
        <ellipse cx="300" cy="296" rx="152" ry="68" transform="rotate(58 300 296)" />
      </g>
      <g stroke="#faf8e9" strokeWidth=".8" opacity=".7">
        <ellipse cx="300" cy="296" rx="156" ry="64" transform="rotate(-34 300 296)" />
        <ellipse cx="300" cy="296" rx="154" ry="70" transform="rotate(58 300 296)" />
      </g>

      <circle cx="300" cy="296" r="83" fill="url(#kinetic-core)" stroke="#606958" strokeWidth=".75" />
      <g clipPath="url(#kinetic-sphere-clip)">
        <path d="M204 280c53 3 114-26 169-64l26 60c-47 53-116 65-180 49Z" fill="#faf8e7" opacity=".23" />
        <path d="M216 324c71 22 118 5 166-21" stroke="#e3e4d4" strokeWidth="1.2" />
        <path d="M217 329c65 22 118 8 166-22" stroke="#1f2c24" strokeWidth="2" opacity=".65" />
        <ellipse cx="299" cy="294" rx="42" ry="84" transform="rotate(-34 299 294)" stroke="#f5f0dc" strokeWidth=".7" opacity=".48" />
        <ellipse cx="299" cy="294" rx="37" ry="84" transform="rotate(-34 299 294)" stroke="#303e2e" strokeWidth=".6" opacity=".45" />
      </g>
      <ellipse cx="272" cy="250" rx="14" ry="8" transform="rotate(-35 272 250)" fill="#fffceb" opacity=".65" />

      <path d="M172.3 382.1c19.1 28.4 91.9 12.9 162.4-34.6S447 238.9 427.7 209.9" stroke="#263529" strokeWidth="8" />
      <path d="M172.3 380.1c19.1 28.4 91.9 12.9 162.4-34.6S447 236.9 427.7 207.9" stroke="url(#kinetic-chrome)" strokeWidth="6" />
      <path d="M170.7 379.1c19.1 28.4 91.9 12.9 162.4-34.6S445.4 235.9 426.1 206.9" stroke="#f9f5e4" strokeWidth=".9" opacity=".8" />
      <path d="M242.3 174.4c-31.8 19.9-21.6 92.4 22.8 162.4s106.2 111 138.1 91.1" stroke="#344030" strokeWidth="8" />
      <path d="M242.3 172.4c-31.8 19.9-21.6 92.4 22.8 162.4s106.2 111 138.1 91.1" stroke="url(#kinetic-chrome)" strokeWidth="5" />

      <use href="#kinetic-shell-segment" transform="translate(142 358) scale(.87)" />
      <use href="#kinetic-shell-segment" transform="translate(458 358) scale(.87)" />
      <use href="#kinetic-shell-segment" transform="translate(300 444) scale(.87)" />

      <g fill="#ee6b30" stroke="#ffbe83" strokeWidth="1">
        <circle cx="196" cy="312" r="7" />
        <circle cx="368" cy="158" r="5" />
        <circle cx="419" cy="326" r="6" />
      </g>
      <g stroke="#7c8572" strokeWidth=".8">
        <path d="M461 263h52m-26-4v8M106 327H76m15-4v8M358 490v26m-4-13h8" />
        <circle cx="513" cy="263" r="2" fill="#7c8572" />
        <circle cx="76" cy="327" r="2" fill="#7c8572" />
      </g>
    </svg>
  );
}
