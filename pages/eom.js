import Head from 'next/head';
import styles from '../styles/EOM.module.css';
import {Toolbar} from '../components/toolbar';
import Image from 'next/image';
export const EOM = ({employee}) => {
    console.log(employee);
    const myLoader=({src})=>{
        return employee.image;
      }
return (
    <>  
    <Head>
    <meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
        <title>Employee of the month</title>
        <meta
          name="description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="og:image" content={employee.image} />
        <meta property="og:title" content="Employee Of The Month" />
        <meta
          property="og:description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="twitter:image" content={employee.image} />
        <meta property="twitter:title" content="Employee Of The Month" />
        <meta
          property="twitter:description"
          content={`This month's employee of the month is ${employee.name}`}
        />
  </Head>
    <main className="page-container">
          <Toolbar />
        <section className={styles.main}>
            <h1>Employee of the month</h1>

            <article className={styles.employeeOfTheMonth}>
                <h3>{employee.name}</h3>
                <h6>{employee.position}</h6>
                <Image loader={myLoader}  src={employee.image} width='500' height='500' layout='responsive'/>

                <p>{employee.description}</p>
            </article>
        </section>
    </main>
    </>
);

};

export const getServerSideProps = async pageContext => {
const apiResponse = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth');
const employee = await apiResponse.json();
return { 
    props: {
        employee
    }
}
}

export default EOM;