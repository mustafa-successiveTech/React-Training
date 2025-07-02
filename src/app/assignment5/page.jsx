import Link from 'next/link';

export const metadata = {
  title: "Assignment 5",
};

export default function Assignment5() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Assignment-5</h2>
      <div style={{ marginBottom: '20px' }}>
        {[1, 2, 3, 4, 5, 6, 7, 12, 13, 14, 15, 16].map((num) => (
          <Link key={num} href={`/assignment5/question${num}`}>
            <button
              style={{
                marginRight: '10px',
                padding: '10px 15px',
                backgroundColor: '#ccc',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Question {num}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
