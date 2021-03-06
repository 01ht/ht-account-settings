"use strict";
import { LitElement, html, css } from "lit-element";
import "@polymer/iron-iconset-svg";
import "@polymer/iron-icon";
import "@01ht/ht-image";

import { styles } from "@01ht/ht-theme/styles";

class HTAccountSettingsHome extends LitElement {
  static get styles() {
    return [
      styles,
      css`
        a {
          display: block;
        }

        a:hover {
          text-decoration: none;
        }

        iron-icon {
          margin-right: 16px;
          min-width: 32px;
          min-height: 32px;
          color: var(--accent-color);
        }

        #container {
          display: grid;
          grid-gap: 16px;
          grid-template-columns: auto auto auto;
          margin-top: 32px;
        }

        #avatar {
          grid-column: 1 / 4;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        #avatar > a {
          display: block;
          position: relative;
          margin: auto;
          width: 128px;
          height: 128px;
          border-radius: 50%;
          overflow: hidden;
        }

        #avatar a div {
          display: none;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: hsla(0, 0%, 0%, 0.5);
        }

        #avatar > a:hover div {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #avatar iron-icon {
          margin: 0;
          width: 48px;
          height: 48px;
          color: #fff;
        }

        #hello-text {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 2.25rem;
          -webkit-hyphens: auto;
          hyphens: auto;
          word-break: break-word;
          word-wrap: break-word;
          color: #202124;
          text-align: center;
          margin-top: 16px;
        }

        #sub-text {
          letter-spacing: 0.00625em;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5rem;
          -webkit-hyphens: auto;
          hyphens: auto;
          word-break: break-word;
          word-wrap: break-word;
          color: #5f6368;
          text-align: center;
          max-width: 800px;
        }

        .item {
          overflow: hidden;
          padding: 24px;
          //box-shadow: 0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12);
          display: flex;
          flex-direction: column;
          width: auto;
        }

        .title {
          color: #414549;
          font-size: 20px;
          display: flex;
          min-height: 32px;
          align-items: center;
          margin-bottom: 16px;
        }

        .description {
          margin: 24px 0;
        }

        .links {
          display: flex;
          flex-direction: column;
        }

        .links > * {
          margin: 8px 0;
        }

        [disabled] {
          cursor: default;
          color: #ccc;
        }

        @media (max-width: 1040px) {
          #container {
            grid-template-columns: auto auto;
          }

          #avatar {
            grid-column: 1 / 3;
          }

          #settings {
            grid-column: 1 / 3;
          }
        }

        @media (max-width: 650px) {
          #container {
            grid-template-columns: auto;
          }

          #avatar,
          #security,
          #personal,
          #settings {
            grid-column: 1;
          }
        }
      `
    ];
  }

  render() {
    const { data } = this;
    let socialLogin = true;
    let providerData = firebase.auth().currentUser.providerData;
    if (providerData.length === 1 && providerData[0].providerId === "password")
      socialLogin = false;
    return html`
    <iron-iconset-svg size="24" name="ht-account-settings-home">
        <svg>
            <defs>
                <g id="lock">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
                </g>
                <g id="account-circle">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                </g>
                <g id="settings">
                    <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
                </g>
                <g id="photo-camera"><circle cx="12" cy="12" r="3.2"></circle><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path></g>
            </defs>
        </svg>
    </iron-iconset-svg>
    <div id="container">
        <div id="avatar">
            <a href="/account/avatar">
                <ht-image image="${
                  window.appConfig.cloudinary.url
                }/c_scale,r_max,f_auto,h_256,w_256/v${data.avatar.version}/${
      data.avatar.public_id
    }.${data.avatar.format}" placeholder="${
      window.appConfig.cloudinary.url
    }/c_scale,r_max,f_auto,h_64,w_64/v${data.avatar.version}/${
      data.avatar.public_id
    }.${data.avatar.format}">
                </ht-image>
                <div><iron-icon icon="ht-account-settings-home:photo-camera"></iron-icon></div>
            </a>
        <h1 id="hello-text">Добро пожаловать, ${data.displayName}!</h1>
        <div id="sub-text">Настройте параметры конфиденциальности, безопасности, уведомлений, чтобы вам было удобнее и эффективнее пользоваться сервисами 01HT.</div>
        </div>
        <div id="security" class="item">
            <div class="title">
                <iron-icon icon="ht-account-settings-home:lock"></iron-icon>Безопасность и вход</div>
            <!--<div class="description"></div>-->
            <div class="links">
                <a href="/account/password" ?hidden="${socialLogin}">Сменить пароль</a>
                <div disabled ?hidden="${!socialLogin}">Сменить пароль</div>
                <a href="/account/email">Сменить email</a>
                <!-- <div disabled>Сменить email</div> -->
            </div>
        </div>
        <div id="personal" class="item">
            <div class="title">
                <iron-icon icon="ht-account-settings-home:account-circle"></iron-icon>Конфиденциальность</div>
            <!--<div class="description"></div>-->
            <div class="links">
                <a href="/account/personal">Личная информация</a>
                <a href="/account/avatar">Сменить аватар</a>
                <a href="/account/privacy">Настройки конфиденциальности</a>
            </div>
        </div>
        <div id="settings" class="item">
            <div class="title">
                <iron-icon icon="ht-account-settings-home:settings"></iron-icon>Настройки аккаунта</div>
            <!--<div class="description"></div>-->
            <div class="links">
                <a href="/account/notifications">Настройка уведомлений</a>
            </div>
        </div>
    </div>`;
  }

  static get properties() {
    return {
      data: { type: Object }
    };
  }
}

customElements.define("ht-account-settings-home", HTAccountSettingsHome);
