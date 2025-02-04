import React from 'react'
import { Container } from "@containers"
import { Card } from '@ui'
import IntroImg from "@image/intro-img.png"
import Image2 from "@image/unsplash_vbxyFxlgpjM.png"
import "./style.scss"

function index() {
    return (
        <>
            <section className='bg-[#1C1E53] py-[92px]'>
                <Container>
                    <div className='flex items-center justify-between'>
                        <div className='w-[595px]'>
                            <h1 className='font-semibold text-[42px] text-white mb-8'>Bangun dan Wujudkan Cita Bersama EDUFREE</h1>
                            <p className='text-white mb-[62px]'>
                                EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara online yang bertujuan untuk membantu kamu meraih cita di bidang teknologi.
                            </p>
                            <div className='flex items-center gap-[35px]'>
                                <button className='py-[15px] px-[41px] rounded-[5px] bg-[#FCD980] hover:bg-[#b8aaaa] duration-200 font-medium'>Lihat Kursus</button>
                                <a className='flex items-center gap-2' href="#">
                                    <span className='text-white'>Lihat Alur Belajar</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                            <path d="M17.5 7.99968H2.5M11.6667 3.33301L17.5 7.99968L11.6667 3.33301ZM17.5 7.99968L11.6667 12.6663L17.5 7.99968Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <img src={IntroImg} alt="" />
                        </div>
                    </div>
                </Container>
            </section>

            <section className='py-[80px] bg-[#EEF4FA]'>
                <Container>
                    <div className='flex items-end justify-between'>
                        <div className='flex gap-10'>
                            <div>
                                <p className='font-semibold text-[32px]'>21.000+</p>
                                <p className='opacity-[0.7]'>Siswa terdaftar</p>
                            </div>
                            <div>
                                <p className='font-semibold text-[32px]'>100+</p>
                                <p className='opacity-[0.7]'>Instruktur Ahli</p>
                            </div>
                            <div>
                                <p className='font-semibold text-[32px]'>150+</p>
                                <p className='opacity-[0.7]'>Kursus Gratis</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-8'>
                            <div className='flex items-center gap-[10px]'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path d="M11.8 22C11.8 22.7956 11.5471 23.5587 11.0971 24.1213C10.647 24.6839 10.0365 25 9.4 25C8.76348 25 8.15303 24.6839 7.70294 24.1213C7.25286 23.5587 7 22.7956 7 22C7 21.2044 7.25286 20.4413 7.70294 19.8787C8.15303 19.3161 8.76348 19 9.4 19C10.0365 19 10.647 19.3161 11.0971 19.8787C11.5471 20.4413 11.8 21.2044 11.8 22ZM23 22C23 22.7956 22.7471 23.5587 22.2971 24.1213C21.847 24.6839 21.2365 25 20.6 25C19.9635 25 19.353 24.6839 18.9029 24.1213C18.4529 23.5587 18.2 22.7956 18.2 22C18.2 21.2044 18.4529 20.4413 18.9029 19.8787C19.353 19.3161 19.9635 19 20.6 19C21.2365 19 21.847 19.3161 22.2971 19.8787C22.7471 20.4413 23 21.2044 23 22Z" fill="black" />
                                        <path d="M4.39927 6C4.02796 6 3.67187 6.1475 3.40932 6.41005C3.14677 6.6726 2.99927 7.0287 2.99927 7.4V21.4C2.99927 21.7713 3.14677 22.1274 3.40932 22.3899C3.67187 22.6525 4.02796 22.8 4.39927 22.8H5.86927C6.02993 22.0088 6.45918 21.2975 7.08429 20.7865C7.7094 20.2756 8.49192 19.9965 9.29927 19.9965C10.1066 19.9965 10.8891 20.2756 11.5142 20.7865C12.1394 21.2975 12.5686 22.0088 12.7293 22.8H14.1993C14.5706 22.8 14.9267 22.6525 15.1892 22.3899C15.4518 22.1274 15.5993 21.7713 15.5993 21.4V7.4C15.5993 7.0287 15.4518 6.6726 15.1892 6.41005C14.9267 6.1475 14.5706 6 14.1993 6H4.39927ZM19.7993 10.2C19.428 10.2 19.0719 10.3475 18.8093 10.6101C18.5468 10.8726 18.3993 11.2287 18.3993 11.6V20.07C18.8497 19.978 19.3139 19.9756 19.7652 20.063C20.2166 20.1504 20.6463 20.3259 21.0298 20.5794C21.4134 20.8329 21.7432 21.1595 22.0005 21.5405C22.2577 21.9216 22.4374 22.3495 22.5293 22.8H23.9993C24.3706 22.8 24.7267 22.6525 24.9892 22.3899C25.2518 22.1274 25.3993 21.7713 25.3993 21.4L25.1985 14.4C25.1984 14.0288 25.1985 10.4 25.1985 10.4H22.1985C22.1985 10.4 21.5705 10.2001 21.1993 10.2H19.7993Z" fill="black" />
                                    </svg>
                                </span>
                                <p className='font-bold text-[24px]'>LOREM</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.60005 2.7998C4.85744 2.7998 4.14525 3.0948 3.62015 3.61991C3.09505 4.14501 2.80005 4.8572 2.80005 5.5998V20.9998C2.80005 22.1137 3.24255 23.182 4.0302 23.9697C4.81785 24.7573 5.88614 25.1998 7.00005 25.1998C8.11396 25.1998 9.18224 24.7573 9.9699 23.9697C10.7575 23.182 11.2 22.1137 11.2 20.9998V5.5998C11.2 4.8572 10.905 4.14501 10.3799 3.61991C9.85485 3.0948 9.14265 2.7998 8.40005 2.7998H5.60005ZM7.00005 22.3998C7.37135 22.3998 7.72745 22.2523 7.99 21.9898C8.25255 21.7272 8.40005 21.3711 8.40005 20.9998C8.40005 20.6285 8.25255 20.2724 7.99 20.0099C7.72745 19.7473 7.37135 19.5998 7.00005 19.5998C6.62875 19.5998 6.27265 19.7473 6.0101 20.0099C5.74755 20.2724 5.60005 20.6285 5.60005 20.9998C5.60005 21.3711 5.74755 21.7272 6.0101 21.9898C6.27265 22.2523 6.62875 22.3998 7.00005 22.3998ZM14 19.94L20.86 13.08C21.385 12.5549 21.6798 11.8429 21.6798 11.1004C21.6798 10.3579 21.385 9.64588 20.86 9.1208L18.879 7.1398C18.354 6.61489 17.6419 6.32 16.8994 6.32C16.157 6.32 15.4449 6.61489 14.9198 7.1398L14 8.0596V19.94ZM22.4 25.1998H12.6994L21.0994 16.7998H22.4C23.1427 16.7998 23.8548 17.0948 24.3799 17.6199C24.905 18.145 25.2 18.8572 25.2 19.5998V22.3998C25.2 23.1424 24.905 23.8546 24.3799 24.3797C23.8548 24.9048 23.1427 25.1998 22.4 25.1998Z" fill="#282938" />
                                    </svg>
                                </span>
                                <p className='font-bold text-[24px]'>DITLANCE</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path d="M15.4 23.8C15.4001 24.0386 15.4612 24.2731 15.5774 24.4815C15.6936 24.6898 15.8612 24.8649 16.0641 24.9903C16.267 25.1157 16.4987 25.1871 16.737 25.1979C16.9753 25.2086 17.2124 25.1583 17.4258 25.0516L23.0258 22.2516C23.2583 22.1354 23.4538 21.9568 23.5906 21.7358C23.7273 21.5147 23.7998 21.26 23.8 21V12.9304C23.7998 12.6919 23.7387 12.4573 23.6225 12.249C23.5063 12.0407 23.3387 11.8655 23.1358 11.7402C22.9329 11.6148 22.7012 11.5433 22.4629 11.5326C22.2246 11.5219 21.9875 11.5722 21.7742 11.6788L16.1742 14.4788C15.9416 14.595 15.7461 14.7736 15.6093 14.9947C15.4726 15.2158 15.4001 15.4705 15.4 15.7304V23.8ZM21.2954 8.78643C21.5276 8.67004 21.7229 8.49133 21.8593 8.27029C21.9958 8.04925 22.0681 7.7946 22.0681 7.53483C22.0681 7.27506 21.9958 7.02042 21.8593 6.79938C21.7229 6.57834 21.5276 6.39963 21.2954 6.28323L14.6258 2.94843C14.4314 2.85133 14.2172 2.80078 14 2.80078C13.7827 2.80078 13.5685 2.85133 13.3742 2.94843L6.70455 6.28323C6.47232 6.39963 6.27705 6.57834 6.14058 6.79938C6.00412 7.02042 5.93184 7.27506 5.93184 7.53483C5.93184 7.7946 6.00412 8.04925 6.14058 8.27029C6.27705 8.49133 6.47232 8.67004 6.70455 8.78643L13.3742 12.1212C13.5685 12.2183 13.7827 12.2689 14 12.2689C14.2172 12.2689 14.4314 12.2183 14.6258 12.1212L21.2954 8.78643ZM6.22575 11.6788C6.01236 11.5722 5.77527 11.5219 5.53696 11.5326C5.29865 11.5433 5.06704 11.6148 4.8641 11.7402C4.66116 11.8655 4.49363 12.0407 4.37739 12.249C4.26116 12.4573 4.20008 12.6919 4.19995 12.9304V21C4.20009 21.26 4.27259 21.5147 4.40932 21.7358C4.54606 21.9568 4.74164 22.1354 4.97415 22.2516L10.5742 25.0516C10.7875 25.1583 11.0246 25.2086 11.2629 25.1979C11.5012 25.1871 11.7329 25.1157 11.9358 24.9903C12.1387 24.8649 12.3063 24.6898 12.4225 24.4815C12.5387 24.2731 12.5998 24.0386 12.6 23.8V15.7304C12.5998 15.4705 12.5273 15.2158 12.3906 14.9947C12.2538 14.7736 12.0583 14.595 11.8258 14.4788L6.22575 11.6788Z" fill="black" />
                                    </svg>
                                </span>
                                <p className='font-bold text-[24px]'>OWTHEST</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 25.1998C16.9705 25.1998 19.8192 24.0198 21.9196 21.9194C24.0201 19.819 25.2 16.9702 25.2 13.9998C25.2 11.0294 24.0201 8.18062 21.9196 6.08021C19.8192 3.9798 16.9705 2.7998 14 2.7998C11.0296 2.7998 8.18086 3.9798 6.08045 6.08021C3.98005 8.18062 2.80005 11.0294 2.80005 13.9998C2.80005 16.9702 3.98005 19.819 6.08045 21.9194C8.18086 24.0198 11.0296 25.1998 14 25.1998ZM6.06485 11.2376C6.58466 9.74901 7.51215 8.43635 8.74165 7.4492C9.11685 8.0218 9.76365 8.3998 10.5 8.3998C11.057 8.3998 11.5911 8.62105 11.985 9.01488C12.3788 9.40871 12.6 9.94285 12.6 10.4998V11.1998C12.6 11.9424 12.895 12.6546 13.4201 13.1797C13.9453 13.7048 14.6574 13.9998 15.4 13.9998C16.1427 13.9998 16.8548 13.7048 17.3799 13.1797C17.905 12.6546 18.2 11.9424 18.2 11.1998C18.1998 10.5732 18.4098 9.96462 18.7964 9.47146C19.1829 8.9783 19.7237 8.62905 20.3322 8.4796C21.6683 10.0079 22.4032 11.9698 22.4 13.9998C22.4 14.4758 22.3608 14.9448 22.2838 15.3998H21C20.2574 15.3998 19.5453 15.6948 19.0201 16.2199C18.495 16.745 18.2 17.4572 18.2 18.1998V21.2756C16.9237 22.0141 15.4747 22.402 14 22.3998V19.5998C14 18.8572 13.705 18.145 13.1799 17.6199C12.6548 17.0948 11.9427 16.7998 11.2 16.7998C10.4574 16.7998 9.74525 16.5048 9.22015 15.9797C8.69505 15.4546 8.40005 14.7424 8.40005 13.9998C8.4003 13.3376 8.16584 12.6967 7.73831 12.191C7.31078 11.6853 6.71786 11.3475 6.06485 11.2376Z" fill="black" />
                                    </svg>
                                </span>
                                <p className='font-bold text-[24px]'>NEOVASI</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8201 1.46485C16.1043 1.55423 16.3526 1.73194 16.5288 1.97215C16.7051 2.21235 16.8001 2.50252 16.8001 2.80045V9.80045H22.4001C22.6562 9.80034 22.9074 9.87047 23.1264 10.0032C23.3454 10.1359 23.5238 10.3262 23.6422 10.5533C23.7605 10.7804 23.8144 11.0356 23.7978 11.2911C23.7812 11.5467 23.6948 11.7928 23.5481 12.0027L13.7481 26.0027C13.5775 26.247 13.3334 26.4306 13.0514 26.5266C12.7693 26.6227 12.4639 26.6262 12.1797 26.5367C11.8954 26.4472 11.6472 26.2694 11.471 26.0291C11.2948 25.7887 11.1999 25.4984 11.2001 25.2005V18.2004H5.60009C5.344 18.2006 5.09279 18.1304 4.87379 17.9977C4.65479 17.865 4.4764 17.6747 4.35802 17.4476C4.23964 17.2205 4.18582 16.9653 4.2024 16.7098C4.21899 16.4542 4.30535 16.2081 4.45209 15.9983L14.2521 1.99825C14.4229 1.75435 14.667 1.57127 14.949 1.4756C15.231 1.37993 15.5361 1.37665 15.8201 1.46625V1.46485Z" fill="black" />
                                    </svg>
                                </span>
                                <p className='font-bold text-[24px]'>ONAGO</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='py-[120px]'>
                <Container>
                    <h1 className='font-semibold text-[38px] max-w-[640px] text-center mx-auto mb-[60px]'>Keuntungan Bergabung Dengan  E-Learning EDUFREE</h1>
                    <div className='grid grid-cols-3 gap-[42px]'>
                        <Card id="1" title="Kursus Gratis" text="Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu"/>
                        <Card id="2" title="Akses Selamanya" text="Semua kursus yang telah kamu daftar bisa diakses selamanya sehingga belajar kamu lebih nyaman dan tidak terburu-buru "/>
                        <Card id="3" title="Grup Konsultasi" text="Terdapat grup konsultasi yang berguna jika kamu ingin menanyakan suatu pertanyaan  dan kamu juga bisa mebuka diskusi baru "/>
                        <Card id="4" title="Sertifikat dan Portofolio" text="Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat serta portofolio dari project kursus yang telah diselesaikan"/>
                        <Card id="5" title="Belajar Lebih Terarah" text="Kursus menyediakan kursus dari level dasar hingga expert sehingga semua  bisa belajar dengan  layanan yang kami sediakan"/>
                        <Card id="6" title="Instruktur Berpengalaman" text="Kami mempunyai instruktur berpengalaman yang diambil dari dunia industri yang tak diragukan lagi pengalamannya"/>
                    </div>
                </Container>
            </section>

            <section className='pb-[150px]'>
                <Container>
                    <div className='flex items-center justify-between'>
                        <div className='w-[624px] flex flex-col gap-4'>
                            <p className='text-[18px] opacity-[0.87]'>Tentang Kami</p>
                            <h1 className='text-[38px] font-semibold'>EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh</h1>
                            <p className='opacity-[0.6]'>Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi kedepanya dalam bidang pendidikan</p>
                        </div>
                        <div>
                            <img src={Image2} alt="img" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default index