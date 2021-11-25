import styles from '../styles/EOM.module.css';
import {Toolbar} from '../components/toolbar';
import Image from 'next/image';
export const EOM = ({employee}) => {
    console.log(employee);
    const myLoader=({src})=>{
        return employee.image;
      }
return (
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