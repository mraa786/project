function flipCards(){
  const paragraph = document.getElementById("card1-para");
  const card1Heading = document.getElementById("card1-heading");
  const card2Heading = document.getElementById("card2-heading");
  const card1Span = document.getElementById("card1Span");
  const card2Span = document.getElementById("card2Span");
  let backupText = localStorage.getItem('backup');

  if (backupText === null) {
    localStorage.setItem('backup', paragraph.textContent);
    const alternateText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate consequat nisi, vitae faucibus nisi sollicitudin sed. Duis eget dolor nulla. Vestibulum id orci in augue facilisis suscipit et sed dui. Nam quis rhoncus nisl. Mauris porta dolor sit amet dui pharetra ullamcorper.';
    paragraph.innerText = alternateText;
  }

  const alternateText = localStorage.getItem('backup');
  localStorage.setItem('backup', paragraph.textContent);
  paragraph.innerText = alternateText;

  const alternateHeading = card1Heading.textContent;
  card1Heading.innerText = card2Heading.textContent;
  card2Heading.innerText = alternateHeading;

  const alternateSpan = card1Span.textContent;
  card1Span.innerText = card2Span.textContent;
  card2Span.innerText = alternateSpan;

}
