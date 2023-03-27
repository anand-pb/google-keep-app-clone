import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from '../notes';

// function createNote(note) {
//     return (
//         <Note
//             key={note.key} 
//             titleRef={note.title}
//             contentRef={note.content}
//         />
//     );
// }

function App() {
    return (
        <div>
        <Header />
        {/* <Note /> */}
        {/* {notes.map(createNote)} */}
        {notes.map((note) => <Note
            key={note.key} 
            titleRef={note.title}
            contentRef={note.content}
            />
        )}
        <Footer />
        </div>
    );
}

export default App;