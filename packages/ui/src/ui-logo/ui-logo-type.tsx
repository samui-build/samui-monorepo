import React from 'react';

import { useUi } from '../ui-provider';
import { UiLogoProps } from './ui-logo-props';

export function UiLogoType({ height, width, ...props }: UiLogoProps = {}) {
    const { isDark } = useUi();
    const textColor = isDark ? '#ffffff' : '#111111';

    return (
        <svg height={height} width={width} viewBox="0 0 672 170" {...props}>
            <g id="logotype" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="logo" transform="translate(25, 20)" fillRule="nonzero">
                    <ellipse
                        id="Oval"
                        fill="#3B88C3"
                        cx="64.2651766"
                        cy="108.863259"
                        rx="64.2651766"
                        ry="19.1367415"
                    ></ellipse>
                    <path
                        d="M120.718564,101.715543 C120.718564,107.485128 111.792845,110.951877 69.0136591,110.951877 C30.0082672,110.951877 20.4149044,107.485128 20.4149044,101.715543 C20.4149044,95.945958 40.7048488,91.2688813 69.0136591,91.2688813 C97.3224694,91.2688813 120.718564,95.945958 120.718564,101.715543 L120.718564,101.715543 Z"
                        fill="#88C9F9"
                    ></path>
                    <path
                        d="M24.9920131,100.6873 C24.9920131,97.1170123 28.5623007,82.835862 64.2651766,82.835862 C107.108628,82.835862 117.81949,97.1170123 117.81949,100.6873 C117.81949,104.257588 117.81949,107.827875 67.8354642,107.827875 C24.9920131,107.827875 24.9920131,104.257588 24.9920131,100.6873 Z"
                        fill="#F4900C"
                    ></path>
                    <circle id="Oval" fill="#FFCC4D" cx="24.9920131" cy="22.1409729" r="17.851438"></circle>
                    <circle id="Oval" fill="#FFAC33" cx="24.9920131" cy="22.1409729" r="14.2811504"></circle>
                    <path
                        d="M96.2156803,51.4780261 C96.0764391,49.4251107 95.8657921,47.4400308 95.5837394,45.5442081 C95.2445621,43.2735052 94.8196978,41.1349029 94.3448496,39.1284013 C93.9092745,37.2825626 93.4344262,35.561684 92.9452968,33.9800466 C92.2133879,31.6022351 91.4564869,29.5421791 90.7709917,27.8534331 C89.4249933,24.5366359 88.3646179,22.6408132 88.3646179,22.6408132 L79.142565,23.829719 C79.142565,23.829719 80.2065107,26.0504379 81.3597136,30.4026184 C81.8274213,32.1699108 82.3058398,34.2942319 82.7378446,36.7720115 C82.9556322,38.0251824 83.1591386,39.3568997 83.3447935,40.788585 C83.6018542,42.7808055 83.8125012,44.9551106 83.9624533,47.2972193 C84.0481402,48.6182257 84.1088351,49.9963567 84.1516785,51.4316123 C84.1659597,51.9528743 84.1909517,52.4562849 84.1980922,52.991828 C84.2230843,54.6662929 84.1052648,56.3693201 83.8981881,58.068777 C83.7089628,59.6004303 83.4340507,61.1249431 83.102014,62.6351748 C82.6271657,64.7987691 82.0452088,66.9266605 81.3918462,68.9545838 C80.8598734,70.5969161 80.2921976,72.1714129 79.7209516,73.6530823 C78.8426609,75.9273555 77.9607998,77.96956 77.1967583,79.6761575 C75.9185953,82.525247 74.9760394,84.42464 74.9760394,84.8209419 C74.9760394,86.0741128 75.8686113,88.4162215 82.1166146,89.9764372 C91.8849214,92.4185139 92.8274774,88.3912295 92.8274774,88.3912295 C92.8274774,88.3912295 93.4487074,86.5061176 94.1699055,82.7965888 C94.5269342,80.9650313 94.9053847,78.7014689 95.2517026,75.9594881 C95.4587793,74.3207261 95.6515748,72.5177308 95.8158081,70.557643 C95.9907522,68.5154385 96.1335637,66.3018601 96.237102,63.9061972 C96.312078,62.0924911 96.3584918,60.1538249 96.3763432,58.1401827 C96.3834838,57.5118121 96.3977649,56.9048632 96.3977649,56.2586412 C96.3977649,54.6198792 96.3227889,53.0346715 96.2156803,51.4780261 L96.2156803,51.4780261 Z"
                        fill="#C1694F"
                    ></path>
                    <path
                        d="M86.8436754,76.095159 C83.2626769,75.4703587 80.9776928,74.4278347 79.7245219,73.6459417 C78.8462311,75.9202149 77.9643701,77.9624194 77.2003286,79.6690169 C79.5388669,80.9400393 82.5093462,81.9540009 85.7297456,82.5109658 C87.5898655,82.835862 89.4357041,82.9965249 91.1672936,82.9965249 C92.2240988,82.9965249 93.2166387,82.9144083 94.1699055,82.7930185 C94.5269342,80.961461 94.9053847,78.6978987 95.2517026,75.9559178 C94.1163512,76.3593603 91.2993943,76.8734817 86.8436754,76.095159 L86.8436754,76.095159 Z M89.5499533,64.1632579 C86.7579885,63.8883457 84.6122456,63.2742563 83.1055842,62.6280342 C82.630736,64.7916285 82.0487791,66.9195199 81.3954165,68.9474433 C83.6018542,69.7793203 86.1974533,70.3791286 88.9144422,70.6469001 C90.0105204,70.7540088 91.0958879,70.8075631 92.1562633,70.8075631 C93.4379965,70.8075631 94.6554646,70.707595 95.8193784,70.5540727 C95.9943224,68.5118682 96.137134,66.2982899 96.2406723,63.9026269 C94.6340429,64.2525151 92.3847617,64.4453106 89.5499533,64.1632579 L89.5499533,64.1632579 Z M90.3389869,58.7221396 C92.438316,58.7221396 94.4983719,58.5114926 96.3799135,58.1401827 C96.3834838,57.5118121 96.3977649,56.9048632 96.3977649,56.2586412 C96.3977649,54.6234494 96.3227889,53.0382417 96.2156803,51.4780261 C94.8661116,51.8314845 92.934586,52.1706619 90.2104566,52.209935 C87.4434837,52.1992242 85.4976769,51.8136331 84.1481082,51.428042 C84.1623894,51.949304 84.1873814,52.4527146 84.194522,52.9882577 C84.219514,54.6627226 84.1016945,56.3657498 83.8946178,58.0652067 C85.8404245,58.4757897 87.993308,58.7114287 90.178324,58.7221396 L90.3389869,58.7221396 L90.3389869,58.7221396 Z M89.7034757,47.0365883 C91.8099454,46.7331139 93.7628927,46.1868599 95.5873097,45.5442081 C95.2481323,43.2735052 94.8232681,41.1349029 94.3484199,39.1284013 C93.0845381,39.6496633 91.2886834,40.2280499 88.7787712,40.5886489 C86.454514,40.924256 84.6836514,40.9028342 83.3447935,40.7850147 C83.6018542,42.7772352 83.8125012,44.9515404 83.9624533,47.293649 C84.3516146,47.3079302 84.7015028,47.3686251 85.101375,47.3686251 C86.6008958,47.3686251 88.1611115,47.2579461 89.7034757,47.0365883 L89.7034757,47.0365883 Z M92.9488671,33.9764763 C92.2133879,31.6022351 91.4564869,29.5421791 90.7709917,27.8534331 C89.6392105,28.4211088 88.2075252,29.0173468 86.3366945,29.5350385 C84.3087712,30.099144 82.6700092,30.3240721 81.3561433,30.4026184 C81.823851,32.1699108 82.3022695,34.2942319 82.7342743,36.7720115 C84.4730044,36.5970674 86.2652888,36.3150147 88.0789949,35.8116041 C89.8141546,35.3296153 91.4243543,34.6833932 92.9488671,33.9764763 L92.9488671,33.9764763 Z"
                        id="Shape"
                        fill="#D99E82"
                    ></path>
                    <path
                        d="M123.349866,10.3340319 C123.235617,10.1840798 111.917805,-4.95750987 97.2403528,1.68322505 C90.6460316,4.66441518 86.3938191,9.53785775 84.8550252,15.8322748 C81.9845139,11.8157012 77.6216225,9.26651589 71.8448972,8.23827306 C56.0606557,5.42488644 46.5244176,22.9585688 46.4315901,23.1335129 C46.2923489,23.3905736 46.3530438,23.7047589 46.5708313,23.8975544 C46.7921892,24.0867797 47.1099448,24.1010608 47.3455837,23.9332573 C47.4169895,23.879703 54.6182596,18.8384569 66.6108556,20.9770592 C78.8676529,23.1585049 87.4613351,25.3006775 87.547022,25.3220992 C87.6005763,25.33281 87.6469901,25.3399506 87.7005444,25.3399506 C87.8719182,25.3399506 88.0397217,25.2685449 88.1611115,25.1400145 C88.2396578,25.0543276 96.3834838,16.3035527 103.870377,12.9189201 C114.95255,7.90623632 122.510848,11.2337444 122.578684,11.2694472 C122.835745,11.3872667 123.142789,11.315861 123.324874,11.0945031 C123.506959,10.8767156 123.517669,10.5661006 123.349866,10.3340319 Z"
                        fill="#3E721D"
                    ></path>
                    <path
                        d="M111.139482,19.1097988 C99.9502011,13.2009728 91.2529805,16.1428898 85.8511354,19.7310288 C79.378204,18.4778579 67.2820696,18.4564361 57.031774,31.5986648 C44.4465102,47.7292241 55.4858394,67.8442244 55.5965184,68.0477308 C55.7071973,68.2476669 55.9178442,68.3654864 56.1427724,68.3654864 L56.2177484,68.3619161 C56.4712388,68.3297835 56.6783155,68.1476988 56.7425807,67.9049193 C56.7818538,67.7656781 60.6591862,53.7415884 70.4631959,41.9489285 C75.8221976,35.5045594 82.2201529,29.5457494 86.7222856,25.6220033 C91.2565508,26.375334 97.9187075,28.0426583 104.463045,31.6986328 C117.219682,38.8320674 123.071384,50.9032098 123.128508,51.0245995 C123.242757,51.2602385 123.489107,51.4244718 123.760449,51.378058 C124.02465,51.3494957 124.242438,51.1567002 124.299562,50.8996395 C124.349546,50.6747114 129.269403,28.6853101 111.139482,19.1097988 L111.139482,19.1097988 Z"
                        fill="#5C913B"
                    ></path>
                </g>
                <g id="Samui" transform="translate(184, 23)" fill={textColor} fillRule="nonzero">
                    <path d="M36.49,106.622 C43.966,106.622 49.484,105.079333 53.044,101.994 C56.604,98.9086667 58.384,94.9333333 58.384,90.068 C58.384,85.796 57.0193333,82.3546667 54.29,79.744 C51.5606667,77.1333333 47.2293333,74.938 41.296,73.158 L27.946,69.064 C23.7926667,67.7586667 20.025,66.2456667 16.643,64.525 C13.261,62.8043333 10.3833333,60.787 8.01,58.473 C5.63666667,56.159 3.827,53.4296667 2.581,50.285 C1.335,47.1403333 0.712,43.4913333 0.712,39.338 C0.712,29.9633333 4.183,22.5763333 11.125,17.177 C18.067,11.7776667 27.4713333,9.078 39.338,9.078 C44.2033333,9.078 48.7126667,9.46366667 52.866,10.235 C57.0193333,11.0063333 60.609,12.0743333 63.635,13.439 C66.661,14.8036667 69.0343333,16.4056667 70.755,18.245 C72.4756667,20.0843333 73.336,22.072 73.336,24.208 C73.336,26.2253333 72.8316667,27.9756667 71.823,29.459 C70.8143333,30.9423333 69.598,32.1586667 68.174,33.108 C65.2073333,30.8533333 61.321,28.925 56.515,27.323 C51.709,25.721 46.3986667,24.92 40.584,24.92 C34.0573333,24.92 29.014,26.2253333 25.454,28.836 C21.894,31.4466667 20.114,34.9473333 20.114,39.338 C20.114,42.898 21.36,45.7756667 23.852,47.971 C26.344,50.1663333 30.438,52.0946667 36.134,53.756 L46.458,56.782 C56.426,59.7486667 64.169,63.813 69.687,68.975 C75.205,74.137 77.964,81.168 77.964,90.068 C77.964,94.8146667 77.0443333,99.1756667 75.205,103.151 C73.3656667,107.126333 70.7253333,110.538 67.284,113.386 C63.8426667,116.234 59.541,118.429333 54.379,119.972 C49.217,121.514667 43.3726667,122.286 36.846,122.286 C31.3873333,122.286 26.4033333,121.811333 21.894,120.862 C17.3846667,119.912667 13.4983333,118.666667 10.235,117.124 C6.97166667,115.581333 4.45,113.801333 2.67,111.784 C0.89,109.766667 0,107.630667 0,105.376 C0,103.002667 0.712,100.985333 2.136,99.324 C3.56,97.6626667 5.22133333,96.4166667 7.12,95.586 C9.968,98.1966667 13.8543333,100.688667 18.779,103.062 C23.7036667,105.435333 29.6073333,106.622 36.49,106.622 Z"></path>
                    <path
                        d="M129.228,107.868 C133.381333,107.868 137.000667,107.452667 140.086,106.622 C143.171333,105.791333 145.366667,104.901333 146.672,103.952 L146.672,81.346 L127.27,83.304 C121.811333,83.8973333 117.717333,85.1136667 114.988,86.953 C112.258667,88.7923333 110.894,91.6106667 110.894,95.408 C110.894,99.324 112.377333,102.379667 115.344,104.575 C118.310667,106.770333 122.938667,107.868 129.228,107.868 Z M128.872,33.998 C139.908,33.998 148.689333,36.401 155.216,41.207 C161.742667,46.013 165.006,53.578 165.006,63.902 L165.006,105.376 C165.006,108.105333 164.383,110.211667 163.137,111.695 C161.891,113.178333 160.2,114.572667 158.064,115.878 C154.978667,117.658 151.003333,119.200667 146.138,120.506 C141.272667,121.811333 135.636,122.464 129.228,122.464 C117.717333,122.464 108.728333,120.209333 102.261,115.7 C95.7936667,111.190667 92.56,104.545333 92.56,95.764 C92.56,87.932 95.0816667,81.9393333 100.125,77.786 C105.168333,73.6326667 112.436667,71.0813333 121.93,70.132 L146.672,67.64 L146.672,63.724 C146.672,58.5026667 144.981,54.7053333 141.599,52.332 C138.217,49.9586667 133.5,48.772 127.448,48.772 C122.701333,48.772 118.132667,49.4246667 113.742,50.73 C109.351333,52.0353333 105.435333,53.5186667 101.994,55.18 C100.807333,54.2306667 99.7986667,53.0736667 98.968,51.709 C98.1373333,50.3443333 97.722,48.8313333 97.722,47.17 C97.722,45.1526667 98.2263333,43.4913333 99.235,42.186 C100.243667,40.8806667 101.816,39.7533333 103.952,38.804 C107.274667,37.1426667 111.072,35.9263333 115.344,35.155 C119.616,34.3836667 124.125333,33.998 128.872,33.998 Z"
                        id="Shape"
                    ></path>
                    <path d="M292.454,64.08 C292.454,58.8586667 291.000333,55.0316667 288.093,52.599 C285.185667,50.1663333 281.24,48.95 276.256,48.95 C272.933333,48.95 269.759,49.573 266.733,50.819 C263.707,52.065 260.948,53.756 258.456,55.892 C258.693333,56.8413333 258.871333,57.85 258.99,58.918 C259.108667,59.986 259.168,61.054 259.168,62.122 L259.168,119.438 C258.337333,119.794 257.150667,120.120333 255.608,120.417 C254.065333,120.713667 252.463333,120.862 250.802,120.862 C247.360667,120.862 244.809333,120.209333 243.148,118.904 C241.486667,117.598667 240.656,115.403333 240.656,112.318 L240.656,64.08 C240.656,58.8586667 239.172667,55.0316667 236.206,52.599 C233.239333,50.1663333 229.264,48.95 224.28,48.95 C220.957333,48.95 217.812667,49.484 214.846,50.552 C211.879333,51.62 209.387333,52.8066667 207.37,54.112 L207.37,119.438 C206.539333,119.794 205.382333,120.120333 203.899,120.417 C202.415667,120.713667 200.784,120.862 199.004,120.862 C195.562667,120.862 193.011333,120.209333 191.35,118.904 C189.688667,117.598667 188.858,115.403333 188.858,112.318 L188.858,53.578 C188.858,50.8486667 189.392,48.6533333 190.46,46.992 C191.528,45.3306667 193.308,43.6693333 195.8,42.008 C199.241333,39.7533333 203.572667,37.8546667 208.794,36.312 C214.015333,34.7693333 219.296,33.998 224.636,33.998 C230.213333,33.998 235.227,34.7693333 239.677,36.312 C244.127,37.8546667 247.776,40.1093333 250.624,43.076 C253.946667,40.4653333 257.892333,38.2996667 262.461,36.579 C267.029667,34.8583333 272.34,33.998 278.392,33.998 C283.02,33.998 287.351333,34.5616667 291.386,35.689 C295.420667,36.8163333 298.891667,38.5963333 301.799,41.029 C304.706333,43.4616667 306.990667,46.5173333 308.652,50.196 C310.313333,53.8746667 311.144,58.2653333 311.144,63.368 L311.144,119.438 C310.194667,119.794 308.978333,120.120333 307.495,120.417 C306.011667,120.713667 304.38,120.862 302.6,120.862 C299.158667,120.862 296.607333,120.209333 294.946,118.904 C293.284667,117.598667 292.454,115.403333 292.454,112.318 L292.454,64.08 Z"></path>
                    <path d="M335.708,36.668 C336.538667,36.4306667 337.725333,36.1636667 339.268,35.867 C340.810667,35.5703333 342.472,35.422 344.252,35.422 C347.693333,35.422 350.215,36.0746667 351.817,37.38 C353.419,38.6853333 354.22,40.94 354.22,44.144 L354.22,88.11 C354.22,94.9926667 356.029667,99.8876667 359.649,102.795 C363.268333,105.702333 368.282,107.156 374.69,107.156 C378.843333,107.156 382.344,106.740667 385.192,105.91 C388.04,105.079333 390.294667,104.189333 391.956,103.24 L391.956,36.668 C392.905333,36.4306667 394.121667,36.1636667 395.605,35.867 C397.088333,35.5703333 398.72,35.422 400.5,35.422 C403.941333,35.422 406.492667,36.0746667 408.154,37.38 C409.815333,38.6853333 410.646,40.94 410.646,44.144 L410.646,104.13 C410.646,106.740667 410.230667,108.876667 409.4,110.538 C408.569333,112.199333 406.908,113.801333 404.416,115.344 C401.330667,117.124 397.266333,118.726 392.223,120.15 C387.179667,121.574 381.276,122.286 374.512,122.286 C362.289333,122.286 352.766333,119.586333 345.943,114.187 C339.119667,108.787667 335.708,100.214 335.708,88.466 L335.708,36.668 Z"></path>
                    <path
                        d="M454.612,119.438 C453.781333,119.794 452.624333,120.120333 451.141,120.417 C449.657667,120.713667 447.966667,120.862 446.068,120.862 C442.626667,120.862 440.075333,120.209333 438.414,118.904 C436.752667,117.598667 435.922,115.403333 435.922,112.318 L435.922,37.024 C436.871333,36.7866667 438.087667,36.49 439.571,36.134 C441.054333,35.778 442.745333,35.6 444.644,35.6 C448.085333,35.6 450.607,36.2526667 452.209,37.558 C453.811,38.8633333 454.612,41.118 454.612,44.322 L454.612,119.438 Z M433.964,10.858 C433.964,7.77266667 435.032,5.19166667 437.168,3.115 C439.304,1.03833333 442.033333,5.68434189e-14 445.356,5.68434189e-14 C448.678667,5.68434189e-14 451.348667,1.03833333 453.366,3.115 C455.383333,5.19166667 456.392,7.77266667 456.392,10.858 C456.392,13.9433333 455.383333,16.5243333 453.366,18.601 C451.348667,20.6776667 448.678667,21.716 445.356,21.716 C442.033333,21.716 439.304,20.6776667 437.168,18.601 C435.032,16.5243333 433.964,13.9433333 433.964,10.858 Z"
                        id="Shape"
                    ></path>
                </g>
            </g>
        </svg>
    );
}