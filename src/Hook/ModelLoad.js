import { useState, useRef, useEffect } from 'react'
import * as tmImage from '@teachablemachine/image'

const MODEL_URL = '/dogcat-model/'

function ModelLoad() {
    const [isStarted, setIsStarted] = useState(false)
    const [predictions, setPredictions] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const webcamContainerRef = useRef(null)
    const modelRef = useRef(null)
    const webcamRef = useRef(null)
    const animationRef = useRef(null)

    const init = async () => {
        setIsLoading(true)

        try {
            const modelURL = MODEL_URL + 'model.json'
            const metadataURL = MODEL_URL + 'metadata.json'


            modelRef.current = await tmImage.load(modelURL, metadataURL)
            const maxPredictions = modelRef.current.getTotalClasses()
            console.log('클래스 개수:', maxPredictions)


            setPredictions(
                Array(maxPredictions).fill(null).map((_, i) => ({
                    className: modelRef.current.getClassLabels()[i],
                    probability: 0
                }))
            )


            const flip = true
            webcamRef.current = new tmImage.Webcam(200, 200, flip)
            await webcamRef.current.setup()
            await webcamRef.current.play()


            if (webcamContainerRef.current) {
                webcamContainerRef.current.appendChild(webcamRef.current.canvas)
            }

            setIsStarted(true)
            setIsLoading(false)
            animationRef.current = window.requestAnimationFrame(loop)

        } catch (error) {
            console.error('초기화 오류:', error)
            alert('카메라 권한을 확인해주세요!')
            setIsLoading(false)
        }
    }

    const loop = () => {
        if (webcamRef.current) {
            webcamRef.current.update()
            predict()
            animationRef.current = window.requestAnimationFrame(loop)
        }
    }

    const predict = async () => {
        if (modelRef.current && webcamRef.current) {

            const prediction = await modelRef.current.predict(webcamRef.current.canvas)
            setPredictions(prediction)
        }
    }


    useEffect(() => {
        return () => {
            if (animationRef.current) window.cancelAnimationFrame(animationRef.current)
            if (webcamRef.current) webcamRef.current.stop()
        }
    }, [])

    return (
        <div className="app">
            <h1>Teachable Machine Image Model</h1>

            {}
            {!isStarted && (
                <button onClick={init} disabled={isLoading} className="start-btn">
                    {isLoading ? '모델 로딩 중...' : '시작하기 (Start)'}
                </button>
            )}

            {}
            <div ref={webcamContainerRef} className="webcam-box" />

            {}
            <div className="result-list">
                {predictions.map((pred, index) => (
                    <div key={index} className="result-item">
                        <span className="label-name">{pred.className}</span>
                        <span className="prob-value">{(pred.probability * 100).toFixed(0)}%</span>
                        {}
                        <div className="bar-bg">
                            <div className="bar-fill" style={{ width: `${pred.probability * 100}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ModelLoad