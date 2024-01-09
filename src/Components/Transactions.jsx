const Transactions = () => {
  return (
    <div className="main-layout-width float-right px-[32px]">
      <h2 className="my-5 font-[500]">Transactions | This Month</h2>
      <div className="bg-white p-5 my-5 rounded-[8px]">
        {/* Search / Sort / Douwnload */}
        <div className="flex justify-between">
          <div className="flex gap-5 items-center px-[10px] h-[36px] border border-solid border-[#D9D9D9] bg-white rounded-[4px]">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_4254_3685)">
                  <path
                    d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25403 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z"
                    fill="#999999"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4254_3685">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <input placeholder="Search by order ID..." />
          </div>
          <div className="flex gap-[6px]">
            <button className="border border-solid border-[#D9D9D9] px-[10px] h-[36px] text-[16px] text-[#4D4D4D] bg-white rounded-[4px] flex items-center justify-center gap-[6px]">
              <span>Sort</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.62301 9.93375C1.83129 9.72547 2.16897 9.72547 2.37725 9.93375L4.641 12.1975L6.90474 9.93375C7.11302 9.72547 7.45071 9.72547 7.65899 9.93375C7.86727 10.142 7.86727 10.4797 7.65899 10.688L5.01812 13.3289C4.80984 13.5371 4.47215 13.5371 4.26387 13.3289L1.62301 10.688C1.41473 10.4797 1.41473 10.142 1.62301 9.93375Z"
                  fill="#4D4D4D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.64095 2.51515C4.9355 2.51515 5.17428 2.75393 5.17428 3.04849L5.17428 12.9517C5.17428 13.2463 4.9355 13.4851 4.64095 13.4851C4.3464 13.4851 4.10762 13.2463 4.10762 12.9517L4.10762 3.04849C4.10762 2.75393 4.3464 2.51515 4.64095 2.51515Z"
                  fill="#4D4D4D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.3772 6.06646C14.169 6.27474 13.8313 6.27474 13.623 6.06646L11.3592 3.80272L9.0955 6.06646C8.88722 6.27474 8.54953 6.27474 8.34126 6.06646C8.13298 5.85818 8.13298 5.52049 8.34126 5.31221L10.9821 2.67135C11.1904 2.46307 11.5281 2.46307 11.7364 2.67135L14.3772 5.31221C14.5855 5.52049 14.5855 5.85818 14.3772 6.06646Z"
                  fill="#4D4D4D"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.3593 13.4851C11.0647 13.4851 10.826 13.2463 10.826 12.9517L10.826 3.04847C10.826 2.75392 11.0647 2.51514 11.3593 2.51514C11.6538 2.51514 11.8926 2.75392 11.8926 3.04847L11.8926 12.9517C11.8926 13.2463 11.6538 13.4851 11.3593 13.4851Z"
                  fill="#4D4D4D"
                />
              </svg>
            </button>
            <button className="w-[36px] h-[36px] border border-solid border-[#D9D9D9] bg-white rounded-[4px] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                  fill="#4D4D4D"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="relative overflow-auto my-5">
          <table className="w-full">
            <thead className="text-gray-700 uppercase bg-[#F2F2F2] text-center">
              <tr className="">
                <th scope="col" className="py-5">
                  Order ID
                </th>
                <th scope="col" className="py-5">
                  <div className="flex items-center gap-1 justify-center">
                    <p>Order date</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <path
                        d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409Z"
                        fill="#4D4D4D"
                      />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="py-5">
                  Order amount
                </th>
                <th scope="col" className="py-5">
                  <div className="flex gap-1 items-center justify-center">
                    <p>Transaction fees</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_0_5817)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z"
                          fill="#4D4D4D"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z"
                          fill="#4D4D4D"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z"
                          fill="#4D4D4D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_5817">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="bg-white border-b border-[#E6E6E6] hover:bg-gray-50">
                <td className="py-4 text-[#146EB4] text-center">#281209</td>
                <td className="py-4 text-[#1A181E] text-center">
                  7 July, 2023
                </td>
                <td className="py-4 text-[#1A181E] text-center">₹1,278.23</td>
                <td className="py-4 text-[#1A181E] text-center">₹22</td>
              </tr>
              <tr className="bg-white border-b border-[#E6E6E6] hover:bg-gray-50">
                <td className="py-4 text-[#146EB4] text-center">#281209</td>
                <td className="py-4 text-[#1A181E] text-center">
                  7 July, 2023
                </td>
                <td className="py-4 text-[#1A181E] text-center">₹1,278.23</td>
                <td className="py-4 text-[#1A181E] text-center">₹22</td>
              </tr>
              <tr className="bg-white border-b border-[#E6E6E6] hover:bg-gray-50">
                <td className="py-4 text-[#146EB4] text-center">#281209</td>
                <td className="py-4 text-[#1A181E] text-center">
                  7 July, 2023
                </td>
                <td className="py-4 text-[#1A181E] text-center">₹1,278.23</td>
                <td className="py-4 text-[#1A181E] text-center">₹22</td>
              </tr>
              <tr className="bg-white border-b border-[#E6E6E6] hover:bg-gray-50">
                <td className="py-4 text-[#146EB4] text-center">#281209</td>
                <td className="py-4 text-[#1A181E] text-center">
                  7 July, 2023
                </td>
                <td className="py-4 text-[#1A181E] text-center">₹1,278.23</td>
                <td className="py-4 text-[#1A181E] text-center">₹22</td>
              </tr>
              <tr className="bg-white border-b border-[#E6E6E6] hover:bg-gray-50">
                <td className="py-4 text-[#146EB4] text-center">#281209</td>
                <td className="py-4 text-[#1A181E] text-center">
                  7 July, 2023
                </td>
                <td className="py-4 text-[#1A181E] text-center">₹1,278.23</td>
                <td className="py-4 text-[#1A181E] text-center">₹22</td>
              </tr>
              <tr className="bg-white border-b border-[#E6E6E6] hover:bg-gray-50">
                <td className="py-4 text-[#146EB4] text-center">#281209</td>
                <td className="py-4 text-[#1A181E] text-center">
                  7 July, 2023
                </td>
                <td className="py-4 text-[#1A181E] text-center">₹1,278.23</td>
                <td className="py-4 text-[#1A181E] text-center">₹22</td>
              </tr>
              <tr className="bg-white border-b border-[#E6E6E6] hover:bg-gray-50">
                <td className="py-4 text-[#146EB4] text-center">#281209</td>
                <td className="py-4 text-[#1A181E] text-center">
                  7 July, 2023
                </td>
                <td className="py-4 text-[#1A181E] text-center">₹1,278.23</td>
                <td className="py-4 text-[#1A181E] text-center">₹22</td>
              </tr>
              <tr className="bg-white border-b border-[#E6E6E6] hover:bg-gray-50">
                <td className="py-4 text-[#146EB4] text-center">#281209</td>
                <td className="py-4 text-[#1A181E] text-center">
                  7 July, 2023
                </td>
                <td className="py-4 text-[#1A181E] text-center">₹1,278.23</td>
                <td className="py-4 text-[#1A181E] text-center">₹22</td>
              </tr>
              <tr className="bg-white border-b border-[#E6E6E6] hover:bg-gray-50">
                <td className="py-4 text-[#146EB4] text-center">#281209</td>
                <td className="py-4 text-[#1A181E] text-center">
                  7 July, 2023
                </td>
                <td className="py-4 text-[#1A181E] text-center">₹1,278.23</td>
                <td className="py-4 text-[#1A181E] text-center">₹22</td>
              </tr>
              <tr className="bg-white border-b border-[#E6E6E6] hover:bg-gray-50">
                <td className="py-4 text-[#146EB4] text-center">#281209</td>
                <td className="py-4 text-[#1A181E] text-center">
                  7 July, 2023
                </td>
                <td className="py-4 text-[#1A181E] text-center">₹1,278.23</td>
                <td className="py-4 text-[#1A181E] text-center">₹22</td>
              </tr>
              <tr className="bg-white border-b border-[#E6E6E6] hover:bg-gray-50">
                <td className="py-4 text-[#146EB4] text-center">#281209</td>
                <td className="py-4 text-[#1A181E] text-center">
                  7 July, 2023
                </td>
                <td className="py-4 text-[#1A181E] text-center">₹1,278.23</td>
                <td className="py-4 text-[#1A181E] text-center">₹22</td>
              </tr>
              <tr className="bg-white border-b border-[#E6E6E6] hover:bg-gray-50">
                <td className="py-4 text-[#146EB4] text-center">#281209</td>
                <td className="py-4 text-[#1A181E] text-center">
                  7 July, 2023
                </td>
                <td className="py-4 text-[#1A181E] text-center">₹1,278.23</td>
                <td className="py-4 text-[#1A181E] text-center">₹22</td>
              </tr>
              <tr className="bg-white border-b border-[#E6E6E6] hover:bg-gray-50">
                <td className="py-4 text-[#146EB4] text-center">#281209</td>
                <td className="py-4 text-[#1A181E] text-center">
                  7 July, 2023
                </td>
                <td className="py-4 text-[#1A181E] text-center">₹1,278.23</td>
                <td className="py-4 text-[#1A181E] text-center">₹22</td>
              </tr>
              <tr className="bg-white border-b border-[#E6E6E6] hover:bg-gray-50">
                <td className="py-4 text-[#146EB4] text-center">#281209</td>
                <td className="py-4 text-[#1A181E] text-center">
                  7 July, 2023
                </td>
                <td className="py-4 text-[#1A181E] text-center">₹1,278.23</td>
                <td className="py-4 text-[#1A181E] text-center">₹22</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <nav
          aria-label="Page navigation example"
          className="flex justify-center"
        >
          <ul className="inline-flex text-base h-10">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-1 border-gray-300 rounded hover:bg-gray-100"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white rounded hover:bg-gray-100"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white rounded hover:bg-gray-100"
              >
                ...
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-[#146EB4] rounded hover:bg-[#146EB4]/75"
              >
                10
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white rounded hover:bg-gray-100"
              >
                11
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white rounded hover:bg-gray-100"
              >
                12
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white rounded hover:bg-gray-100"
              >
                13
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white rounded hover:bg-gray-100"
              >
                14
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white rounded hover:bg-gray-100"
              >
                15
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white rounded hover:bg-gray-100"
              >
                16
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white rounded hover:bg-gray-100"
              >
                17
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white rounded hover:bg-gray-100"
              >
                18
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-1 border-gray-300 rounded hover:bg-gray-100"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Transactions;
