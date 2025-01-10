import Svg, { Path } from 'react-native-svg';

export default function FitloopLogo({
  height,
  width,
}: {
  height?: number;
  width?: number;
}) {
  return (
    <Svg
      width={width?.toString() ?? '500'}
      height={height?.toString() ?? (width! / 1.58942081505).toString()}
      viewBox="0 0 500 315"
      fill="none"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M147.841 102.888C167.309 66.6432 205.591 41.9435 249.532 41.9435C293.474 41.9435 331.756 66.6432 351.223 102.888H326.609C309.502 78.7207 281.328 62.9152 249.532 62.9152C217.736 62.9152 189.562 78.7207 172.455 102.888H147.841ZM147.841 211.688C167.309 247.933 205.591 272.633 249.532 272.633C293.474 272.633 331.756 247.933 351.223 211.688H326.609C309.502 235.855 281.328 251.661 249.532 251.661C217.736 251.661 189.562 235.855 172.455 211.688H147.841ZM101.942 102.888C124.128 42.8872 181.916 0 249.532 0C317.148 0 374.936 42.8872 397.122 102.888H374.521C353.475 54.7181 305.371 20.9717 249.532 20.9717C193.693 20.9717 145.589 54.7181 124.543 102.888H101.942ZM101.942 211.688C124.128 271.689 181.916 314.576 249.532 314.576C317.148 314.576 374.936 271.689 397.122 211.688H374.521C353.475 259.858 305.371 293.604 249.532 293.604C193.693 293.604 145.589 259.858 124.543 211.688H101.942Z"
        fill="white"
      />
      <Path
        d="M0 200.54V114.201H58.4239V127.294H15.6868V151.504H47.4308V163.238H15.6868V200.54H0ZM68.3053 200.54V114.201H83.9921V200.54H68.3053ZM119.936 200.54V127.171H93.8735V114.201H161.685V127.171H135.623V200.54H119.936ZM171.566 200.54V114.201H187.253V187.571H228.755V200.54H171.566ZM275.198 202.393C266.551 202.393 258.753 200.516 251.803 196.761C244.837 193.022 239.361 187.736 235.375 180.901C231.374 174.066 229.373 166.244 229.373 157.433C229.373 148.622 231.374 140.799 235.375 133.964C239.361 127.13 244.837 121.818 251.803 118.03C258.753 114.243 266.551 112.349 275.198 112.349C283.762 112.349 291.527 114.243 298.493 118.03C305.443 121.818 310.919 127.13 314.921 133.964C318.906 140.799 320.899 148.622 320.899 157.433C320.899 166.244 318.906 174.042 314.921 180.827C310.919 187.629 305.443 192.923 298.493 196.711C291.527 200.499 283.762 202.393 275.198 202.393ZM275.198 188.189C280.715 188.189 285.738 186.929 290.267 184.409C294.796 181.906 298.402 178.324 301.087 173.663C303.755 169.019 305.089 163.609 305.089 157.433C305.089 151.339 303.771 145.962 301.136 141.301C298.501 136.657 294.919 133.058 290.39 130.506C285.861 127.953 280.797 126.677 275.198 126.677C269.598 126.677 264.517 127.953 259.956 130.506C255.377 133.058 251.77 136.657 249.135 141.301C246.5 145.962 245.183 151.339 245.183 157.433C245.183 163.609 246.525 169.019 249.209 173.663C251.877 178.324 255.501 181.906 260.079 184.409C264.641 186.929 269.681 188.189 275.198 188.189ZM375.988 202.393C367.342 202.393 359.536 200.516 352.569 196.761C345.619 193.022 340.152 187.736 336.166 180.901C332.164 174.066 330.163 166.244 330.163 157.433C330.163 148.622 332.164 140.799 336.166 133.964C340.152 127.13 345.619 121.818 352.569 118.03C359.536 114.243 367.342 112.349 375.988 112.349C384.552 112.349 392.317 114.243 399.284 118.03C406.234 121.818 411.709 127.13 415.711 133.964C419.697 140.799 421.69 148.622 421.69 157.433C421.69 166.244 419.697 174.042 415.711 180.827C411.709 187.629 406.234 192.923 399.284 196.711C392.317 200.499 384.552 202.393 375.988 202.393ZM375.988 188.189C381.505 188.189 386.528 186.929 391.057 184.409C395.586 181.906 399.193 178.324 401.877 173.663C404.545 169.019 405.879 163.609 405.879 157.433C405.879 151.339 404.562 145.962 401.927 141.301C399.292 136.657 395.71 133.058 391.181 130.506C386.652 127.953 381.588 126.677 375.988 126.677C370.389 126.677 365.308 127.953 360.746 130.506C356.168 133.058 352.561 136.657 349.926 141.301C347.291 145.962 345.973 151.339 345.973 157.433C345.973 163.609 347.316 169.019 350 173.663C352.668 178.324 356.291 181.906 360.87 184.409C365.431 186.929 370.471 188.189 375.988 188.189ZM434.042 200.54V114.201H468.626C478.096 114.201 485.697 116.713 491.428 121.736C497.143 126.759 500 133.635 500 142.363C500 151.421 497.159 158.314 491.477 163.04C485.795 167.783 478.137 170.155 468.503 170.155H449.728V200.54H434.042ZM449.728 157.186H466.65C478.426 157.186 484.313 152.245 484.313 142.363C484.313 132.235 478.426 127.171 466.65 127.171H449.728V157.186Z"
        fill="white"
      />
    </Svg>
  );
}
