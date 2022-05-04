function Student(a, b, c, d, e) {
    this.rollNo = a;
    this.name = b;
    this.m1 = c;
    this.m2 = d;
    this.m3 = e;

    this.computeTotal = function () {
        return this.m1 + this.m2 + this.m3;
    }
    this.computeAvg = function () {
        return this.computeTotal()/ 3;
    }

    this.computeGrade = function () {
        avg = this.computeAvg();
        if (avg >= 90)
            return "A";

        if (avg >= 70)
            return "B";

        if (avg >= 50)
            return "C";

        if (avg < 50)
            return "F";
    }
}