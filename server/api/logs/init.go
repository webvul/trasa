package logs

import (
	"io"
	"os"

	"github.com/gorilla/websocket"
	"github.com/seknox/trasa/server/consts"
	"github.com/seknox/trasa/server/global"
	"github.com/seknox/trasa/server/models"
)

func InitStore(con *global.State) {
	// initialize local state
	Store = LogStore{
		State: con,
	}

}

func InitStoreMock() *LogsMock {
	lmock := new(LogsMock)
	Store = lmock
	return lmock
}

var Store LogAdapter

type LogStore struct {
	*global.State
}

type LogAdapter interface {
	LogSignup(signup *models.InitSignup) error
	LogLogin(log *AuthLog, reason consts.FailedReason, status bool) error

	GetLoginEvents(entityType, entityID, orgID string) (logEvents []AuthLog, err error)
	GetLoginEventsByPage(entityType, entityID, orgID string, page int, size int, dateFrom, dateTo int64) ([]AuthLog, error)

	AddNewActiveSession(session *AuthLog, connID, appType string) error
	RemoveActiveSession(connID string) error
	RemoveAllActiveSessions()
	ServeLiveSessions(ws *websocket.Conn)

	LogInAppTrail(ip, userAgent, description string, user *models.User, status bool) error
	GetOrgInAppTrails(orgID string, page int, size int, dateFrom, dateTo int64) ([]models.InAppTrail, error)

	GetFromMinio(path, bucketName string) (io.ReadSeeker, error)
	PutIntoMinio(path, filepath, bucketName string) error
	UploadHTTPLogToMinio(file *os.File, login AuthLog) error
}