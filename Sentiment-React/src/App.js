import React, {useState} from 'react';
import Form from "./components/Form";

import styles from "./App.module.scss";
import Analysis from "./components/Analysis";
import axios from "axios";
import ErrorModalWindow from "./UI/Errors";
import Loader from "./UI/Loader/Loader";

import template from "./template.json";

const App = () => {
  const authorGithubURL = "https://github.com/IvanBelikov";
  const apiOriginalURL = "https://sentim-api.herokuapp.com/";
  const apiURL = "https://sentim-api.herokuapp.com/api/v1/";

  const [analysisResult, setAnalysisResult] = useState({});
  const [text, setText] = useState(template.temp);
  const [isError, setIsError] = useState(false);
  const [loader, setLoader] = useState(false);

  const getStatistic = async (text) => {
    if (text) {
      try {
        setIsError(false);
        setLoader(true);
        const response = await axios.post(apiURL, {text});
        await setTimeout(() => setLoader(false), 500);
        setAnalysisResult(response.data);
      } catch (err) {
        throw Error(err);
      }
    } else {
      setIsError(true);
    }
  }

  const editText = () => {
    setAnalysisResult({});
  }

  return (
    <div className={styles.container}>
      <>
        <h1 className={styles.title}>Sentiment Analyzer</h1>
        <div className={styles.subTitle}>
          Test your text on emotional polarity by {" "}
          <a target="_blank" rel="noreferrer" className={styles.author}
             href={authorGithubURL}>Ivan Belikov
          </a>
          {" "} and {" "}
          <a target="_blank" rel="noreferrer" className={styles.author}
             href={apiOriginalURL}>This API
          </a>
        </div>
      </>
      <div className={styles.error}>
        {isError && <ErrorModalWindow header={"Error!"} body={"Field can't be empty"}/>}
      </div>
      {loader && <Loader/>}
      {
        loader || (
          Object.entries(analysisResult).length === 0 && analysisResult.constructor === Object
          ? <Form text={text} setText={setText} getStatistic={getStatistic}/>
          : <Analysis editText={editText} analysis={analysisResult}/>
        )
      }
    </div>
  );
};

export default App;