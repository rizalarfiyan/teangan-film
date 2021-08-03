import rizal from '../image/author/rizal.png';

export default class AboutSection extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="author_section">
                <div class="wrapper">
                    <div class="heading">
                        <h1>
                            <span>About Developer</span>
                        </h1>
                    </div>
                    <div class="authorwrap">
                        <div class="author clickanim">
                            <div class="sekolah">
                                <div class="image">
                                    <div class="svg">
                                        <svg class="atas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.13 39.15">
                                            <path d="M132.16,69.54S105.52,38.73,74.26,63A48,48,0,0,0,62.51,76.74c-11.78,20-26.63,8.37-17.35-10.2C55.38,46.1,106.16,37.54,132.16,69.54Z" transform="translate(-42.12 -48.2)" />
                                        </svg>
                                        <svg class="tigaatas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.25 28.61">
                                            <path d="M161.16,81.54c9-3,15,10,16-1C177.16,71.54,164.16,77.54,161.16,81.54Z" transform="translate(-151.04 -56.56)" />
                                            <path d="M159.16,77.54c6-6,19-6,19-11S166.16,56.54,159.16,77.54Z" transform="translate(-151.04 -56.56)" />
                                            <path d="M156.16,75.54c-4-9,8-9,6-16-2-6-11-2-11,7,0,7,5,9,5,9" transform="translate(-151.04 -56.56)" />
                                        </svg>
                                        <svg class="lingkaran" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126 126">
                                            <circle cx="63" cy="63" r="63" />
                                        </svg>
                                        <svg class="bawah" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.35 74.58">
                                            <path d="M32.16,150.54s-9,22,12,37c28,19,32-10,54-19,18-7,34,6,49,4,20,0,40-18,18-28s6-29,17-7-11,45-36,42-39.09-12-56,7c-16,18-35,19-50,8C16.23,177,32.16,150.54,32.16,150.54Z" transform="translate(-26.84 -127.23)" />
                                        </svg>
                                        <svg class="mask_lingkaran" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.25 93.25">
                                            <path d="M173,128.07V218H47V125h.18A63,63,0,0,0,173,128.07Z" transform="translate(-46.88 -124.88)" />
                                        </svg>
                                    </div>
                                    <img src="${rizal}" alt="Muhamad Rizal Arfiyan" />
                                </div>
                                <div class="datasekolah">
                                    <span>
                                        <span class="quotes">
                                            Terima Kasih kepada Dicoding serta Kementerian Pariwisata dan Ekonomi Kreatif, mengizinkan saya untuk mengikuti event BDD 2020
                                        </span>
                                    </span>
                                    <ul class="social-icons">
                                        <li>
                                            <a class="clickanim" href="https://instagram.com/rizalarfiyan/"><i class="fa fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a class="clickanim" href="https://github.com/rizalarfiyan"><i class="fa fa-github"></i></a>
                                        </li>
                                        <li>
                                            <a class="clickanim" href="mailto:rizal.arfiyan.23@gmail.com?subject=Hai%20Kak%20Rizal%20Arfiyan&body=Ganti%20pesan%20di%20sini"><i class="fa fa-envelope"></i></a>
                                        </li>
                                        <li>
                                            <a class="clickanim" href="https://api.whatsapp.com/send?phone=62895377233002"><i class="fa fa-whatsapp"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="caption">
                                <h2>Muhamad Rizal Arfiyan</h2>
                                <h4>Fornt End | UI-UX Design</h4>
                                <span class="quotes">
                                    Hidup itu seperti programming, jika ada kesalahan maka perbaikilah untuk menjadi yang lebih baik baik lagi! Coding it's my live.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define("about-section", AboutSection);