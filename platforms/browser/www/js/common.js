let paramUserId = '';

let funds = [];
funds['allan@lambton.ca'] = {
    name: "Allan Im",
    password: "password",
    address1: "275 Yorkland Rd",
    address2: "Toronto, ON M2J 0B4",
    chequing: {
        balance: 4345, creditTotal: 300, creditAvail: 300,
        summary: [
            {date: "2018/09/17", in: 0, out: 45},
            {date: "2018/09/15", in: 0, out: 128},
            {date: "2018/09/15", in: 0, out: 34},
            {date: "2018/09/10", in: 65, out: 0},
            {date: "2018/09/10", in: 0, out: 323},
            {date: "2018/09/09", in: 0, out: 6},
            {date: "2018/09/09", in: 0, out: 120},
            {date: "2018/09/09", in: 0, out: 59},
            {date: "2018/09/09", in: 100, out: 0},
            {date: "2018/09/07", in: 0, out: 13},
            {date: "2018/09/05", in: 0, out: 5},
            {date: "2018/09/04", in: 0, out: 24},
            {date: "2018/09/02", in: 0, out: 7},
            {date: "2018/08/31", in: 4235, out: 0},
            {date: "2018/08/30", in: 120, out: 0}
        ]
    },
    saving: {
        balance: 32534, creditTotal: 100, creditAvail: 100,
        summary: [
            {date: "2018/09/17", in: 12823, out: 0},
            {date: "2018/09/15", in: 0, out: 1000},
            {date: "2018/09/13", in: 0, out: 3012},
            {date: "2018/09/10", in: 829, out: 0},
            {date: "2018/09/07", in: 0, out: 493},
            {date: "2018/09/04", in: 0, out: 1093},
            {date: "2018/09/01", in: 93, out: 0},
            {date: "2018/08/24", in: 0, out: 243},
            {date: "2018/08/10", in: 829, out: 0},
            {date: "2018/08/05", in: 0, out: 120},
            {date: "2018/08/04", in: 0, out: 3493},
            {date: "2018/08/01", in: 93, out: 0},
            {date: "2018/07/24", in: 0, out: 137},
            {date: "2018/07/10", in: 829, out: 0},
            {date: "2018/07/05", in: 0, out: 120}
        ]
    }

};
funds['user1@lambton.ca'] = {
    name: "User1 Lambton",
    password: "password",
    address1: "265 Yorkland Blvd",
    address2: "Toronto, ON M2J 0B4",
    chequing: {
        balance: 1324, creditTotal: 300, creditAvail: 300,
        summary: [
            {date: "2018/09/16", in: 0, out: 35},
            {date: "2018/09/16", in: 0, out: 128},
            {date: "2018/09/15", in: 0, out: 324},
            {date: "2018/09/11", in: 0, out: 230},
            {date: "2018/09/10", in: 34, out: 0},
            {date: "2018/09/09", in: 98, out: 0},
            {date: "2018/09/05", in: 0, out: 20},
            {date: "2018/09/04", in: 0, out: 120},
            {date: "2018/09/02", in: 0, out: 32},
            {date: "2018/09/01", in: 0, out: 13},
            {date: "2018/08/29", in: 0, out: 52},
            {date: "2018/08/23", in: 0, out: 24},
            {date: "2018/08/22", in: 0, out: 76},
            {date: "2018/08/17", in: 12, out: 0},
            {date: "2018/08/15", in: 120, out: 0}
        ]
    },
    saving: {
        balance: 293, creditTotal: 100, creditAvail: 100,
        summary: [
            {date: "2018/09/17", in: 13, out: 0},
            {date: "2018/09/15", in: 0, out: 37},
            {date: "2018/09/13", in: 0, out: 326},
            {date: "2018/09/10", in: 800, out: 0},
            {date: "2018/09/07", in: 0, out: 393},
            {date: "2018/09/04", in: 0, out: 1093},
            {date: "2018/09/01", in: 93, out: 0},
            {date: "2018/08/24", in: 0, out: 243},
            {date: "2018/08/10", in: 829, out: 0},
            {date: "2018/08/05", in: 0, out: 120},
            {date: "2018/08/04", in: 0, out: 3493},
            {date: "2018/08/01", in: 93, out: 0},
            {date: "2018/07/24", in: 0, out: 137},
            {date: "2018/07/10", in: 829, out: 0},
            {date: "2018/07/05", in: 0, out: 120}
        ]
    }

};
funds['user2@lambton.ca'] = {
    name: "User2 Lambton",
    password: "password",
    address1: "265 Yorkland Blvd",
    address2: "Toronto, ON M2J 0B4",
    chequing: {
        balance: 204, creditTotal: 300, creditAvail: 300,
        summary: [
            {date: "2018/09/16", in: 0, out: 35},
            {date: "2018/09/16", in: 0, out: 128},
            {date: "2018/09/15", in: 0, out: 324},
            {date: "2018/09/11", in: 0, out: 230},
            {date: "2018/09/10", in: 34, out: 0},
            {date: "2018/09/09", in: 98, out: 0},
            {date: "2018/09/05", in: 0, out: 20},
            {date: "2018/09/04", in: 0, out: 120},
            {date: "2018/09/02", in: 0, out: 32},
            {date: "2018/09/01", in: 0, out: 13},
            {date: "2018/08/29", in: 0, out: 52},
            {date: "2018/08/23", in: 0, out: 24},
            {date: "2018/08/22", in: 0, out: 76},
            {date: "2018/08/17", in: 12, out: 0},
            {date: "2018/08/15", in: 120, out: 0}
        ]
    },
    saving: {
        balance: 2132, creditTotal: 100, creditAvail: 100,
        summary: [
            {date: "2018/09/17", in: 13, out: 0},
            {date: "2018/09/15", in: 0, out: 37},
            {date: "2018/09/13", in: 0, out: 326},
            {date: "2018/09/10", in: 800, out: 0},
            {date: "2018/09/07", in: 0, out: 393},
            {date: "2018/09/04", in: 0, out: 1093},
            {date: "2018/09/01", in: 93, out: 0},
            {date: "2018/08/24", in: 0, out: 243},
            {date: "2018/08/10", in: 829, out: 0},
            {date: "2018/08/05", in: 0, out: 120},
            {date: "2018/08/04", in: 0, out: 3493},
            {date: "2018/08/01", in: 93, out: 0},
            {date: "2018/07/24", in: 0, out: 137},
            {date: "2018/07/10", in: 829, out: 0},
            {date: "2018/07/05", in: 0, out: 120}
        ]
    }

};


function isEmpty(value) {
    return value === "" || value == null || value === undefined || (value != null && typeof value === "object" && !Object.keys(value).length);
}

// reference: https://jsfiddle.net/lesson8/5tt7d3e6/
function convertNumberToWords(amount) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }
        value = "";
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value] + " ";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Thousand ";
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += "Hundred  ";
            } else if (i == 6 && value != 0) {
                words_string += "Hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ");
    }
    return words_string;
}

function numberWithCommas(number) {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function currentDate() {
    const d = new Date();
    return d.getFullYear() + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2);
}

function makeSummaryInData(inAmount) {
    return {date: currentDate(), in: inAmount, out: 0}
}

function makeSummaryOutData(outAmount) {
    return {date: currentDate(), in: 0, out: outAmount}
}

// Navigation
$("#nav-transfer-funds").click(function () {
    allClearSection();
    initAll();
    $(".transfer").show();
});
$("#nav-change-password").click(function () {
    allClearSection();
    changePasswordClear();
    $(".my-password").show();
});
$("#nav-print-check").click(function () {
    allClearSection();
    printCheckClear();
    $(".print-check").show();
});
$("#nav-account-summary").click(function () {
    allClearSection();
    initSummary();
    $(".account-summary").show();
});
$("#nav-exit").click(function () {
    allClearSection();
    $(".login").show();
});
$(".nav-back").click(function () {
    allClearSection();
    $(".menu").show();
});

function allClearSection() {
    $(".login").hide();
    $(".menu").hide();
    $(".transfer").hide();
    $(".admin").hide();
    $(".my-password").hide();
    $(".print-check").hide();
    $(".account-summary").hide();
    $(".container").width(345);
}
