
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <div className={styles.heading}>
                    <h1 className={styles.quizheadtext}>Quiz</h1>
                </div>
                <div className={styles.body}>
                    <div className={styles.queationtext}>
                        Question1:  Hello World
                    </div>
                    <div className={styles.option}>
                        <input type="radio" className={styles.radiobutton} />
                        <div className={styles.option}>
                            option1</div></div>
                    <div className={styles.option}>
                        <input type="radio" className={styles.radiobutton} />
                        <div className={styles.option}>
                            option2</div></div>
                    <div className={styles.option}>
                        <input type="radio" className={styles.radiobutton} /><div className={styles.option}>
                            option3
                        </div></div>
                    <div className={styles.option}>
                        <input type="radio" className={styles.radiobutton} />
                        <div className={styles.option}>
                            option4</div></div></div></header></div>
    );
}

export default App;
