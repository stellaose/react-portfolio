import '../Stylesheets/Animated.scss'

const Animated = ({letterClass, strArray, index}) => {
  return (
    <>
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + index}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    </>
  )
}

export default Animated