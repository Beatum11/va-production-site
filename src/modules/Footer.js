import React from "react";
import '../cssFiles/footer.css';

const Footer = () => {
    return(
        <div className="footer-body">
            <div class="footer-basic">
                <footer>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#">Главная</a></li>
                        <li class="list-inline-item"><a href="#">О нас</a></li>
                        <li class="list-inline-item"><a href="#">Портфолио</a></li>
                        <li class="list-inline-item"><a href="#">Контакты</a></li>
                        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                    </ul>
                    <p class="copyright">V&A Production ©2023</p>
                    <p class="copyright">Made by S.Beatum in 2022</p>
                </footer>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </div>
    );
}

export default Footer;