import Head from 'next/head'
import Link from 'next/link'
import Posts from '../Components/Posts'
import styles from "../styles/Home.module.css";
import MainContainer from "../Components/MainContainer";
import {Provider} from "react-redux";
import {store} from "../redux/redux-store";

export default function Home() {
  return (
       <MainContainer>
         <Posts/>
       </MainContainer>
  )
}

/*
<main className={styles.main}>*/
/*
<div className={styles.container}>*/
