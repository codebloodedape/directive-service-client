import React from 'react'
import serverConfig from '../../config/server.json'
import './home.css'
// import cx from 'classnames'
// import PropTypes from 'prop-types']
const URL_BASE = serverConfig.host

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFolder: {
                name: 'root',
                // id: 'root',
                children: []
            },
            // items: [],
            selectedNodeId: '',
            addItemSelected: false,
            newItemName: 'New Folder',
            token: ''
            // lastNodeId: ''
        }
    }

    componentDidMount() {
        this.authenticate()
        this.newItemTextField = React.createRef();
        // this.getData()
    }

    // componentWillUnmount() {
    //     this.unauthenticate()
    // }


    authenticate = () => {
        fetch(URL_BASE + '/login', {
            method: 'GET',
            // body: JSON.stringify(
            //     {
            //         "username": 'reactapp',
            //     }
            // ),
            headers: {
                "username": 'reactapp',
            },
        })
            .then(res => {
                if (!res.ok) {
                    // TODO Display error
                    return null
                }
                else {
                    return res.json()
                }
            })
            .then(
                res => {
                    this.setState({
                        token: res.token,
                        selectedNodeId: 'root'
                    }, () => {
                        this.getData()
                    })
                }
            )
    }

    unauthenticate = () => {
        fetch(URL_BASE + '/logout', {
            method: 'GET',
            headers: {
                "token": this.state.token,
            },
        })
        // .then(res => res.json())
        // .then(
        //     res => { }
        // )
        // TODO handle ?
    }

    getData = () => {
        fetch(URL_BASE + '/folder/' + this.state.selectedNodeId, {
            method: 'GET',
            // body: JSON.stringify({
            //     "token": this.state.token
            // }),
            headers: {
                'token': this.state.token
            },
            // headers: {
            //     'Content-Type': 'application/json'
            // },
        })
            .then(res => {
                if (!res.ok) {
                    // TODO make this condition only for response code 403
                    this.authenticate()
                    return null
                }
                else {
                    return res.json()
                }
            })
            // .then(res => res.json())
            .then(
                res => {

                    // res = res.json()
                    if (res) {
                        // const children = res.children
                        const selectedFolder = {
                            id: res.id,
                            name: res.name,
                            children: res.children.map(child => {
                                return {
                                    id: child.id,
                                    name: child.name
                                }
                            })
                        }
                        this.setState({ selectedFolder })
                    }
                }
            )
        // .then(res => res.json())
        // .catch()
    }

    itemClicked = (item) => {
        this.setState({
            // lastNodeId: this.state.selectedNodeId,
            selectedNodeId: item.id,
            addItemSelected: false
        }, () => {
            this.getData()
        })
    }

    backClicked = () => {
        // console.log(this.state.selectedNodeId)
        this.setState({

        })
    }

    addItemClicked = () => {
        this.setState({
            addItemSelected: true,
            newItemName: 'New Folder'
        }, () => {
            this.newItemTextField.current.focus()
        })
    }

    addItemSaveClicked = () => {
        this.setState({
            addItemSelected: false
        }, () => {
            fetch(URL_BASE + '/folder', {
                method: 'PUT',
                body: JSON.stringify(
                    {
                        "folderRequest": {
                            "name": this.state.newItemName,
                            "parentId": this.state.selectedNodeId
                        }
                    }
                ),
                headers: {
                    'Content-Type': 'application/json',
                    'token': this.state.token
                },
            })

                .then(res => {
                    if (!res.ok) {
                        // TODO make this condition only for response code 403
                        this.authenticate()
                        return null
                    }
                    else {
                        // return res.json()
                        this.getData()
                    }
                })
        })
    }

    addItemCancelClicked = () => {
        this.setState({
            newItemName: 'New Folder',
            addItemSelected: false
        })
    }

    onNewItemNameChange = (e) => {
        this.setState({
            newItemName: e.target.value
        })
    }

    rootClicked = () => {
        this.setState({
            selectedNodeId: 'root',
            addItemSelected: false
        }, () => {
            this.getData()
        })
    }

    deleteItemClicked = (item) => {
        fetch(URL_BASE + '/folder/' + item.id, {
            method: 'DELETE',
            body: JSON.stringify({
                "folderRequest": {
                    "parentId": this.state.selectedNodeId
                }
            }),
            headers: {
                'Content-Type': 'application/json',
                'token': this.state.token
            },
        })

            .then(res => {
                if (!res.ok) {
                    // TODO make this condition only for response code 403
                    this.authenticate()
                    return null
                }
                else {
                    // return res.json()
                    this.getData()
                }
            })
    }

    render() {
        // console.log(this.state.items)
        let container = [] //'This folder is empty'
        let body = 'This folder is empty'
        if (this.state.selectedFolder.children.length > 0) {
            container = this.state.selectedFolder.children.map(item => {
                return (
                    <div className='item' onClick={() => this.itemClicked(item)}>
                        <div className='itemText'>{item.name}</div>
                        {
                            (item.id !== 'root') ? <div className='deleteButton' onClick={(e) => { e.stopPropagation(); this.deleteItemClicked(item) }}></div> : ''
                        }
                    </div>
                )
            })
        }

        let addButton
        if (this.state.selectedNodeId !== '') {
            addButton = <div className='footer'><div className='addButton' onClick={this.addItemClicked}>Add a folder</div></div>
        }
        // let newItemSection
        if (this.state.addItemSelected) {
            container.push(
                <div className='addItemSection'>
                    <input ref={this.newItemTextField} className='addItemTextField' type='text' onFocus={(event) => event.target.select()}
                        value={this.state.newItemName} onChange={this.onNewItemNameChange} />
                    <div className='addItemSaveButton' onClick={this.addItemSaveClicked}></div>
                    <div className='addItemCancelButton' onClick={this.addItemCancelClicked}></div>
                </div>
            )
        }
        if (container.length > 0) {
            body = container
        }
        return (
            <div className='pageContent'>
                <div className='header'>
                    <div className='headerLeftButtons'>
                    <div className='backButton' onClick={this.backClicked}></div>
                    <div className='rootButton' onClick={this.rootClicked}></div>
                    </div>
                    <div className='headerText'>{this.state.selectedFolder.name}</div>
                </div>
                <div className='itemsContainer'>
                    {body}
                </div>
                {addButton}
            </div>
        )
    }
}
export default HomePage