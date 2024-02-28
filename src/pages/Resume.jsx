import ResumePg1 from '../assets/images/ResumePg1.jpeg';
import ResumePg2 from '../assets/images/ResumePg2.jpeg';

export default function Resume() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>My Resume</h1>
      <a href="../assets/Resume.pdf" download>Click here to download my resume</a>
      <img src={ResumePg1} alt="Page 1"></img>
      <img src={ResumePg2} alt="Page 2"></img>
    </div>
  );
}
