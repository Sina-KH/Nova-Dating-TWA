import MySecondaryButton from '@/components/Button/MySecondaryButton';

interface Props {
    title?: string;
    subTitle?: string;
    action?: {
        title: string;
        onClick: () => void;
    };
}
export default function EmptyCard({ title, subTitle, action }: Props) {
    return (
        <div className={'flex flex-col items-center'}>
            {/*Empty svg*/}
            <svg width="291" height="194" viewBox="0 0 291 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_16_3972)">
                    <path
                        d="M158.31 159.495L159.284 155.862C159.376 155.517 159.172 155.162 158.827 155.07L155.193 154.096C154.848 154.004 154.494 154.209 154.401 154.554L153.428 158.187C153.335 158.532 153.54 158.887 153.885 158.979L157.518 159.953C157.863 160.045 158.218 159.84 158.31 159.495Z"
                        fill="white"
                        fillOpacity="0.2"
                    />
                    <g filter="url(#filter0_d_16_3972)">
                        <path
                            d="M217.721 62.2428L174.304 37.1755C171.829 35.747 168.665 36.5947 167.237 39.0691L123.953 114.04C122.524 116.514 123.372 119.678 125.846 121.107L169.264 146.174C171.738 147.602 174.902 146.755 176.331 144.28L219.615 69.3097C221.044 66.8353 220.196 63.6713 217.721 62.2428Z"
                            fill="#182533"
                            fillOpacity="0.42"
                            shapeRendering="crispEdges"
                        />
                    </g>
                    <path
                        d="M177.313 53.2502L176.403 49.8541C176.311 49.5091 175.956 49.3044 175.611 49.3969L172.215 50.3069C171.87 50.3993 171.665 50.7539 171.758 51.0989L172.668 54.495C172.76 54.8399 173.115 55.0447 173.46 54.9522L176.856 54.0422C177.201 53.9498 177.406 53.5952 177.313 53.2502Z"
                        fill="#E1E4E5"
                    />
                    <path
                        d="M171.809 132.251L170.899 128.855C170.807 128.51 170.452 128.305 170.107 128.397L166.711 129.307C166.366 129.4 166.161 129.754 166.254 130.099L167.164 133.495C167.256 133.84 167.611 134.045 167.956 133.953L171.352 133.043C171.697 132.95 171.902 132.596 171.809 132.251Z"
                        fill="#E1E4E5"
                    />
                    <path
                        d="M171.809 132.251L170.899 128.855C170.807 128.51 170.452 128.305 170.107 128.397L166.711 129.307C166.366 129.4 166.161 129.754 166.254 130.099L167.164 133.495C167.256 133.84 167.611 134.045 167.956 133.953L171.352 133.043C171.697 132.95 171.902 132.596 171.809 132.251Z"
                        fill="#E1E4E5"
                    />
                    <path
                        d="M180.285 96.1952L176.886 83.5089C176.793 83.1639 176.439 82.9592 176.094 83.0516L163.408 86.4509C163.063 86.5434 162.858 86.898 162.95 87.2429L166.35 99.9292C166.442 100.274 166.797 100.479 167.142 100.386L179.828 96.9872C180.173 96.8948 180.378 96.5402 180.285 96.1952Z"
                        fill="#E1E4E5"
                    />
                    <g filter="url(#filter1_d_16_3972)">
                        <path
                            d="M73.3158 62.2428L116.734 37.1755C119.208 35.747 122.372 36.5947 123.8 39.0691L167.085 114.04C168.513 116.514 167.666 119.678 165.191 121.107L121.773 146.174C119.299 147.602 116.135 146.755 114.707 144.28L71.4222 69.3097C69.9937 66.8353 70.8414 63.6713 73.3158 62.2428Z"
                            fill="#182533"
                            fillOpacity="0.42"
                            shapeRendering="crispEdges"
                        />
                    </g>
                    <path
                        d="M113.724 53.2502L114.634 49.8541C114.726 49.5091 115.081 49.3044 115.426 49.3969L118.822 50.3069C119.167 50.3993 119.372 50.7539 119.279 51.0989L118.369 54.495C118.277 54.84 117.922 55.0447 117.577 54.9522L114.181 54.0423C113.836 53.9498 113.631 53.5952 113.724 53.2502Z"
                        fill="#E1E4E5"
                    />
                    <path
                        d="M119.227 132.251L120.137 128.855C120.23 128.51 120.584 128.305 120.929 128.397L124.326 129.307C124.671 129.4 124.875 129.754 124.783 130.099L123.873 133.495C123.78 133.84 123.426 134.045 123.081 133.953L119.685 133.043C119.34 132.95 119.135 132.596 119.227 132.251Z"
                        fill="#E1E4E5"
                    />
                    <path
                        d="M119.227 132.251L120.137 128.855C120.23 128.51 120.584 128.305 120.929 128.397L124.326 129.307C124.671 129.4 124.875 129.754 124.783 130.099L123.873 133.495C123.78 133.84 123.426 134.045 123.081 133.953L119.685 133.043C119.34 132.95 119.135 132.596 119.227 132.251Z"
                        fill="#E1E4E5"
                    />
                    <path
                        d="M110.752 96.1952L114.151 83.5089C114.243 83.1639 114.598 82.9592 114.943 83.0516L127.629 86.4509C127.974 86.5434 128.179 86.898 128.087 87.2429L124.687 99.9292C124.595 100.274 124.24 100.479 123.895 100.386L111.209 96.9872C110.864 96.8948 110.659 96.5402 110.752 96.1952Z"
                        fill="#E1E4E5"
                    />
                    <g filter="url(#filter2_d_16_3972)">
                        <path
                            d="M180.743 18.4302H110.58C107.723 18.4302 105.407 20.7464 105.407 23.6035V142.267C105.407 145.124 107.723 147.44 110.58 147.44H180.743C183.6 147.44 185.917 145.124 185.917 142.267V23.6035C185.917 20.7464 183.6 18.4302 180.743 18.4302Z"
                            fill="#182533"
                        />
                    </g>
                    <path
                        d="M126.613 35.1094L123.001 31.4973C122.748 31.2448 122.339 31.2448 122.086 31.4973L118.474 35.1094C118.221 35.362 118.221 35.7714 118.474 36.024L122.086 39.6361C122.339 39.8887 122.748 39.8887 123.001 39.6361L126.613 36.024C126.865 35.7714 126.865 35.362 126.613 35.1094Z"
                        fill="#E1E4E5"
                    />
                    <path
                        d="M158.623 82.6393L145.957 69.9739C145.705 69.7213 145.295 69.7213 145.043 69.9739L132.377 82.6393C132.125 82.8919 132.125 83.3013 132.377 83.5539L145.043 96.2194C145.295 96.4719 145.705 96.4719 145.957 96.2194L158.623 83.5539C158.875 83.3013 158.875 82.8919 158.623 82.6393Z"
                        fill="#E1E4E5"
                    />
                    <path
                        d="M198.035 149.989C195.121 149.989 192.759 152.351 192.759 155.265C192.759 158.178 195.121 160.54 198.035 160.54C200.948 160.54 203.31 158.178 203.31 155.265C203.31 152.351 200.948 149.989 198.035 149.989Z"
                        fill="#5288C1"
                    />
                    <path
                        d="M176.283 77.9231C172.139 77.9231 168.78 81.2825 168.78 85.4264C168.78 89.5704 172.139 92.9297 176.283 92.9297C180.427 92.9297 183.787 89.5704 183.787 85.4264C183.787 81.2825 180.427 77.9231 176.283 77.9231Z"
                        fill="#5288C1"
                    />
                    <path
                        d="M119.773 117.047C117.374 117.047 115.43 118.991 115.43 121.389C115.43 123.788 117.374 125.732 119.773 125.732C122.171 125.732 124.115 123.788 124.115 121.389C124.115 118.991 122.171 117.047 119.773 117.047Z"
                        fill="#5288C1"
                    />
                    <path
                        d="M84.0117 156.392C81.2803 156.392 79.066 154.178 79.066 151.446C79.066 148.715 81.2803 146.5 84.0117 146.5C86.7431 146.5 88.9574 148.715 88.9574 151.446C88.9574 154.178 86.7431 156.392 84.0117 156.392Z"
                        fill="#5288C1"
                    />
                    <path
                        d="M90.548 69.4322C91.4489 67.8718 93.4442 67.3372 95.0046 68.2381C96.565 69.139 97.0996 71.1343 96.1987 72.6947C95.2978 74.2551 93.3026 74.7897 91.7422 73.8888C90.1818 72.9879 89.6471 70.9926 90.548 69.4322Z"
                        fill="#E1E4E5"
                    />
                    <path
                        d="M94.2999 25.7581C91.907 25.7581 89.9672 23.8183 89.9672 21.4254C89.9672 19.0326 91.907 17.0928 94.2999 17.0928C96.6928 17.0928 98.6326 19.0326 98.6326 21.4254C98.6326 23.8183 96.6928 25.7581 94.2999 25.7581Z"
                        fill="#182533"
                    />
                    <path
                        d="M52.3891 65.6367H52.4366C52.7179 69.6202 55.6803 69.6816 55.6803 69.6816C55.6803 69.6816 52.4137 69.7453 52.4137 74.3483C52.4137 69.7453 49.1467 69.6816 49.1467 69.6816C49.1467 69.6816 52.1081 69.6202 52.3891 65.6367ZM85.6478 116.77H85.6934C85.9634 120.741 88.8078 120.803 88.8078 120.803C88.8078 120.803 85.6711 120.866 85.6711 125.456C85.6711 120.866 82.5348 120.803 82.5348 120.803C82.5348 120.803 85.3779 120.741 85.6478 116.77ZM206.551 122.22H206.596C206.866 126.192 209.711 126.253 209.711 126.253C209.711 126.253 206.575 126.317 206.575 130.906C206.575 126.317 203.438 126.253 203.438 126.253C203.438 126.253 206.281 126.192 206.551 122.22Z"
                        fill="#182533"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_16_3972"
                        x="119.259"
                        y="36.4814"
                        width="105.051"
                        height="118.386"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_3972" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_3972" result="shape" />
                    </filter>
                    <filter
                        id="filter1_d_16_3972"
                        x="66.7283"
                        y="36.4814"
                        width="105.05"
                        height="118.386"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_3972" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_3972" result="shape" />
                    </filter>
                    <filter
                        id="filter2_d_16_3972"
                        x="90.4066"
                        y="8.43018"
                        width="110.51"
                        height="159.01"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="5" />
                        <feGaussianBlur stdDeviation="7.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_3972" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_3972" result="shape" />
                    </filter>
                    <clipPath id="clip0_16_3972">
                        <rect width="291" height="194" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <p className={'font-bold text-lg'}>{title}</p>
            <p>{subTitle}</p>
            {action ? (
                <MySecondaryButton className={'pt-2 text-sm'} onClick={() => action.onClick()}>
                    {action.title}
                </MySecondaryButton>
            ) : undefined}
        </div>
    );
}
