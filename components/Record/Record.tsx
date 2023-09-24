import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

interface RecordCardProps {
  artists: Array<string>;
  name: string;
  id: string;
  image: string;
  url: string;
}

const RecordCard = ({ artists, name, id, image, url }: RecordCardProps) => {
  const renderArtists = () => {
    return artists.map((artist: string, idx, arr) => {
      return (idx == arr.length - 1) ? <span>{artist}</span> : <span>{artist}, </span>
    })
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mb-3 justify-center items-center w-full">
      <div className="flex-row justify-center items-center p-3 hidden md:flex">
        <Image src={image} width={64} height={64} alt={`Album cover for ${name} by ${artists[0]}`} />
      </div>
      <div className="flex flex-col p-3 justify-center">
        <h4 className="text-lg font-bold">{name}</h4>
        <div className="flex flex-row">
          <div>
            <p>
              {renderArtists()}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center items-center ps-5">
        <Link href={url}>
          <div className=" px-2 py-2 w-12 h-12 text-center md:w-auto md:h-auto md:px-4 md:py-2 bg-green-500 rounded-full">
            <span className="hidden md:block">Listen On</span>
            <FontAwesomeIcon className="text-3xl md:text-xl" icon={faSpotify} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default RecordCard