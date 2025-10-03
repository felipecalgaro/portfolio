'use client';

import Image from 'next/image';
import DownloadIcon from '../assets/download-icon.svg'

async function downloadFile() {
  const response = await fetch("https://ipapi.co/json/");
  const data = await response.json();

  const isBrazil = data.country === "BR";

  const fileUrl = isBrazil ? "/Curriculo-Felipe-Calgaro.pdf" : "/Lebenslauf-Felipe-Calgaro.pdf";
  window.location.href = fileUrl;
}

export function DownloadButton() {
  return (
    <button onClick={downloadFile} className='ring-[1.3px] ring-custom-black px-5 py-3 rounded-sm text-xl flex justify-center items-center gap-2'>
      Download CV
      <Image src={DownloadIcon} alt='download' width={28} height={28} />
    </button>
  )
}