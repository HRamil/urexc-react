import React from 'react'

//style
import './../style/components/parallax.scss'

function Parallax() {
  return (
    <div className='parallax'>
      <div className="container">
        <div className='text'>
          <p>Real Estate</p>
          <p>Find a perfect home you love..!</p>
          <p>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.</p>
        </div>
      </div>

      <div className="scrollButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="94" viewBox="0 0 54 94" fill="none">
          <rect width="54" height="94" rx="27" fill="#02172C" />
          <path d="M31.1091 50.215C31.1091 50.9427 30.9844 51.5976 30.7349 52.1797C30.475 52.7618 30.1112 53.2192 29.6434 53.5519C29.1757 53.8845 28.6299 54.0508 28.0062 54.0508L28.0062 52.1485C28.474 52.1069 28.8586 51.925 29.1601 51.6028C29.4615 51.2701 29.6122 50.8075 29.6122 50.215C29.6122 49.6017 29.4667 49.1235 29.1757 48.7805C28.8742 48.4374 28.4896 48.2659 28.0218 48.2659C27.658 48.2659 27.3617 48.3751 27.133 48.5934C26.9043 48.8013 26.7276 49.0664 26.6029 49.3886C26.4781 49.7005 26.343 50.137 26.1974 50.6984C26.0103 51.4053 25.8232 51.9822 25.6361 52.4292C25.4386 52.8658 25.1371 53.24 24.7317 53.5519C24.3263 53.8637 23.7858 54.0196 23.1101 54.0196C22.4864 54.0196 21.9406 53.8637 21.4729 53.5519C21.0051 53.24 20.6464 52.8034 20.397 52.2421C20.1475 51.6807 20.0227 51.031 20.0227 50.293C20.0227 49.2431 20.2878 48.3855 20.818 47.7202C21.3377 47.0445 22.055 46.6703 22.9698 46.5975L22.9698 48.5622C22.5747 48.5934 22.2369 48.7805 21.9562 49.1235C21.6756 49.4666 21.5352 49.9188 21.5352 50.4801C21.5352 50.9895 21.6652 51.4053 21.925 51.7275C22.1849 52.0498 22.5591 52.2109 23.0477 52.2109C23.3804 52.2109 23.6558 52.1121 23.8741 51.9146C24.082 51.7067 24.2484 51.4468 24.3731 51.135C24.4978 50.8231 24.633 50.3969 24.7785 49.8564C24.976 49.1391 25.1735 48.557 25.371 48.11C25.5685 47.6526 25.8752 47.268 26.291 46.9561C26.6964 46.6339 27.2422 46.4728 27.9282 46.4728C28.4792 46.4728 28.9989 46.6235 29.4875 46.925C29.9761 47.216 30.3711 47.6474 30.6726 48.2191C30.9636 48.7805 31.1091 49.4458 31.1091 50.215ZM26.6964 44.9678C25.8128 44.9678 25.0384 44.7911 24.3731 44.4377C23.6974 44.0738 23.1777 43.5749 22.8138 42.9408C22.45 42.3067 22.2681 41.579 22.2681 40.7578C22.2681 39.7183 22.5176 38.8607 23.0165 38.185C23.5051 37.4989 24.2068 37.0363 25.1215 36.7972L25.1215 38.7151C24.6953 38.8711 24.3627 39.1206 24.1236 39.4636C23.8845 39.8066 23.765 40.238 23.765 40.7578C23.765 41.4855 24.0249 42.0676 24.5446 42.5042C25.054 42.9304 25.7712 43.1435 26.6964 43.1435C27.6216 43.1435 28.344 42.9304 28.8638 42.5042C29.3836 42.0676 29.6434 41.4855 29.6434 40.7578C29.6434 39.7287 29.1912 39.0478 28.2869 38.7151L28.2869 36.7972C29.1601 37.0467 29.8565 37.5145 30.3763 38.2006C30.8857 38.8867 31.1403 39.7391 31.1403 40.7578C31.1403 41.579 30.9584 42.3067 30.5946 42.9408C30.2204 43.5749 29.7006 44.0738 29.0353 44.4377C28.3596 44.7911 27.58 44.9678 26.6964 44.9678ZM23.6558 33.2482C23.2192 32.9883 22.8814 32.6453 22.6423 32.2191C22.3928 31.7825 22.2681 31.2679 22.2681 30.6754L24.108 30.6754L24.108 31.1276C24.108 31.8241 24.2847 32.3542 24.6382 32.718C24.9916 33.0715 25.6049 33.2482 26.4781 33.2482L31 33.2482L31 35.0258L22.4084 35.0258L22.4084 33.2482L23.6558 33.2482ZM31.1403 25.3148C31.1403 26.1256 30.9584 26.8585 30.5946 27.5134C30.2204 28.1683 29.7006 28.6828 29.0353 29.0571C28.3596 29.4313 27.58 29.6184 26.6964 29.6184C25.8232 29.6184 25.0488 29.4261 24.3731 29.0415C23.6974 28.6568 23.1777 28.1319 22.8138 27.4666C22.45 26.8013 22.2681 26.0581 22.2681 25.2368C22.2681 24.4156 22.45 23.6724 22.8138 23.0071C23.1777 22.3418 23.6974 21.8168 24.3731 21.4322C25.0488 21.0476 25.8232 20.8553 26.6964 20.8553C27.5696 20.8553 28.344 21.0528 29.0197 21.4478C29.6954 21.8428 30.2204 22.3834 30.5946 23.0695C30.9584 23.7451 31.1403 24.4936 31.1403 25.3148ZM29.5967 25.3148C29.5967 24.8574 29.4875 24.4312 29.2692 24.0362C29.0509 23.6308 28.7235 23.3033 28.2869 23.0539C27.8503 22.8044 27.3201 22.6796 26.6964 22.6796C26.0727 22.6796 25.5477 22.7992 25.1215 23.0383C24.685 23.2774 24.3575 23.5944 24.1392 23.9894C23.9209 24.3844 23.8118 24.8106 23.8118 25.268C23.8118 25.7254 23.9209 26.1516 24.1392 26.5466C24.3575 26.9312 24.685 27.2379 25.1215 27.4666C25.5477 27.6953 26.0727 27.8096 26.6964 27.8096C27.6216 27.8096 28.3388 27.5757 28.8482 27.108C29.3472 26.6298 29.5967 26.0321 29.5967 25.3148ZM19.4614 17.3205L31 17.3205L31 19.0981L19.4614 19.0981L19.4614 17.3205ZM19.4614 13.2091L31 13.2091L31 14.9867L19.4614 14.9867L19.4614 13.2091Z" fill="white" />
          <path d="M26.2929 83.7071C26.6834 84.0976 27.3166 84.0976 27.7071 83.7071L34.0711 77.3431C34.4616 76.9526 34.4616 76.3195 34.0711 75.9289C33.6805 75.5384 33.0474 75.5384 32.6569 75.9289L27 81.5858L21.3431 75.9289C20.9526 75.5384 20.3195 75.5384 19.9289 75.9289C19.5384 76.3195 19.5384 76.9526 19.9289 77.3431L26.2929 83.7071ZM26 64V83H28V64H26Z" fill="white" />
        </svg>
      </div>
    </div>
  )
}

export default Parallax