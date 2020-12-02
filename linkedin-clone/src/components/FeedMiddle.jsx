import { faCalendar, faEdit, faNewspaper, faPhotoVideo, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import ArticleModal from './ArticleModal';
import EventsModal from './EventsModal';
import PhotoModal from './PhotoModal';
import Posts from './Posts';
import StartPost from './StartPost';


class FeedMiddle extends React.Component {
    state = {
        photoModal: false,
        videoModal: false,
        articleModal: false,
        startPostModal: false,
        eventsModal: false,
        loadingPosts: false,
        posts: []
    }

    getPosts = async () => {
        let url = "https://striveschool-api.herokuapp.com/api/posts"

        try {
            const response = await fetch(url,
                {
                    headers: new Headers({
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
                    }),
                }
            );
            if (response.ok) {
                const result = await response.json();
                this.setState({ posts: result, loadingPosts: true });
            } else {
                console.log(response);
                this.setState({ loadingPosts: true });
            }
        } catch (e) {
            console.log(e);
            this.setState({ loadingPosts: true });
        }
    };

    componentDidMount = () => {
        setTimeout(() => {
            this.getPosts();
        }, 1000);
    };
    postData = async (data) => {
        let newPost = {
            text: data
        }
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzEwNmVkMjY2ODAwMTcwZWEzZDAiLCJpYXQiOjE2MDY3MzA2MTYsImV4cCI6MTYwNzk0MDIxNn0.0SA5BuCxgs7H-mWOcIfvvED6ga9_s3jGPIvujZ4KSbA',
                }

            })
            if (response.ok) {
                this.getPosts();
            } else {
                console.log(response)
            }
        } catch (e) {
            console.log(e)
        }
    }

    sendPosts = (file, item) => {
        this.toggleModal(item)
        this.postData(file);
    }
    deletePost = () => { }
    editPost = () => { }
    toggleModal = (item) => {
        const currentstate = { ...this.state }
        currentstate[item + "Modal"] = !(currentstate[item + "Modal"])
        this.setState(currentstate)
    }
    render() {
        const { photoModal, videoModal, articleModal, startPostModal, eventsModal, loadingPosts, posts } = this.state
        return <div className="mt-5" id="feedMiddle">
            <div className="border-bottom my-2 py-2">
                <Card className="px-4 py-2" id="cardPost">
                    <div>
                        <Button variant="light" className="w-100 rounded-pill font-small text-left" onClick={() => this.toggleModal("startPost")}><FontAwesomeIcon icon={faEdit} /> Start a post</Button>
                    </div>
                    <Row className="justify-content-around mt-2">
                        <Button onClick={() => this.toggleModal("photo")} variant="light"><FontAwesomeIcon icon={faPhotoVideo} /> Photo</Button>
                        <Button onClick={() => this.toggleModal("video")} variant="light"><FontAwesomeIcon icon={faVideo} /> Video</Button>
                        <Button onClick={() => this.toggleModal("events")} variant="light"><FontAwesomeIcon icon={faCalendar} /> Event</Button>
                        <Button onClick={() => this.toggleModal("startPost")} variant="light"><FontAwesomeIcon icon={faNewspaper} /> Write article</Button>
                    </Row>
                </Card>
            </div>
            <StartPost controlls={this.toggleModal} />
            {photoModal && <PhotoModal title="photo" show={true} onHide={this.toggleModal} />}
            {videoModal && <PhotoModal title="video" show={true} onHide={this.toggleModal} />}
            {articleModal && <ArticleModal show={true} />}
            {eventsModal && <EventsModal title="events" show={true} onHide={this.toggleModal} />}
            {startPostModal && <StartPost show={true} user={this.props.user} onHide={this.toggleModal} sendPosts={this.sendPosts} />}
            {loadingPosts ? posts.length > 0 && posts.reverse().map((post, key) => <Posts user={this.props.user} key={key} data={post} />) : <p>Loading...</p>}

        </div>;
    }
}


export default FeedMiddle;