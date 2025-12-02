// Icons
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";

// CSS
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.footer_text}>
                    <h3>CineAPI</h3>
                    <p>Developed by <span>Breno Melo</span></p>
                </div>

                <div className={styles.social_links}>
                    <a
                        href="https://www.linkedin.com/in/breno-melo-69602b267/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={styles.social_icon}
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/Breno2k"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className={styles.social_icon}
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.instagram.com/brenomelo9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className={styles.social_icon}
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://github.com/Breno2k/CineAPI"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Repository"
                        className={`${styles.social_icon} ${styles.repo_link}`}
                    >
                        <BiGitRepoForked />
                    </a>
                </div>

                <p className={styles.copyright}>
                    © {new Date().getFullYear()} CineAPI. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer