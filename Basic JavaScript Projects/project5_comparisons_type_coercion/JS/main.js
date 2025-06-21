// Using the typeof to learn how it works.
document.write(typeof 10.5269);

// Testing out type coercion and see how JS will respond.
document.write(70 / "70" * "70" + "70" - 70);
// This will print 7000. Why? It does 70/70, which is 1 and 1 time 70 is just 70. Next it appends 70 to 70 to get 7070,
// and when you subtract 70 from 7070 you get 7000.