"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptography = void 0;
const envVariables_1 = require("../config/envVariables");
const { encryptKey } = (0, envVariables_1.envVariables)();
const hashKey = encryptKey || "SuperSecretKey2500";
const letters = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
];
exports.cryptography = {
    encryptPassword(password, refKey = hashKey) {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const encryptKey = [];
        const passwordArr = [];
        let key = "";
        for (let i = 0; i < hashKey.length; i++) {
            let ref1 = 0;
            let ref2 = 0;
            let count = 0;
            if (password[i] === undefined) {
                break;
            }
            if (numbers.indexOf(Number(refKey[i])) !== -1) {
                ref1 = numbers.indexOf(Number(refKey[i]));
            }
            else if (letters.indexOf(refKey[i].toLowerCase()) !== -1) {
                ref1 = letters.indexOf(refKey[i].toLowerCase());
            }
            if (numbers.indexOf(Number(password[i])) !== -1) {
                ref2 = numbers.indexOf(Number(password[i]));
            }
            else if (letters.indexOf(password[i].toLowerCase()) !== -1) {
                ref2 = letters.indexOf(password[i].toLowerCase());
            }
            if (count % 2 === 0) {
                key = key + numbers[(ref1 + ref2) / 2];
            }
            else {
                key = key + letters[(ref1 + ref2) / 2];
            }
            count++;
        }
        for (let i = 0; i < key.length; i++) {
            if (numbers.indexOf(Number(key[i])) !== -1) {
                encryptKey.push(numbers.indexOf(Number(key[i])));
            }
            else if (letters.indexOf(key[i].toLowerCase()) !== -1) {
                encryptKey.push(letters.indexOf(key[i].toLowerCase()));
            }
        }
        for (let i = 0; i < password.length; i++) {
            passwordArr.push(password[i]);
        }
        for (let i = 0; i < encryptKey.length; i++) {
            let count = 0;
            while (count !== Number(encryptKey[i])) {
                passwordArr.unshift(passwordArr[passwordArr.length - 1]);
                passwordArr.pop();
                count++;
            }
            passwordArr.push(key[i]);
        }
        return passwordArr.toString().replace(/\,/g, "");
    },
    comparePassword(password, encryptedPassword, key = hashKey) {
        return exports.cryptography.encryptPassword(password, key) === encryptedPassword
            ? true
            : false;
    },
    generateToken(password, key = hashKey) {
        return exports.cryptography.encryptPassword(password + new Date().toISOString().split("T")[0], key);
    },
    validateToken(password, token) {
        return exports.cryptography.generateToken(password) === token ? true : false;
    },
};
